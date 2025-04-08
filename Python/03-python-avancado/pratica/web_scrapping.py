import requests
import time
import csv
import random
import concurrent.futures
import threading
from bs4 import BeautifulSoup

# global headers to be used for requests
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0'}

MAX_THREADS = 25
file_lock = threading.Lock()
stats_lock = threading.Lock()
movies_written = 0
movies_skipped = 0
missing_fields = {"title": 0, "date": 0, "rating": 0, "plot_text": 0}

def initialize_csv():
    with open('movies.csv', mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
        writer.writerow(['Título', 'Data de Lançamento', 'Classificação', 'Sinopse'])

def extract_movie_details(movie_link):
    global movies_written, movies_skipped, missing_fields
    
    time.sleep(random.uniform(0, 0.2))
    response = requests.get(movie_link, headers=headers)
    movie_soup = BeautifulSoup(response.content, 'html.parser')

    if movie_soup is not None:
        title = None
        date = None
        
        # Encontrando a seção específica
        page_section = movie_soup.find('section', attrs={'class': 'ipc-page-section'})
        
        if page_section is not None:
            # Encontrando todas as divs dentro da seção
            divs = page_section.find_all('div', recursive=False)
            
            if len(divs) > 1:
                target_div = divs[1]
                
                # Encontrando o título do filme
                title_tag = target_div.find('h1')
                if title_tag:
                    title = title_tag.find('span').get_text()
                
                # Encontrando a data de lançamento
                date_tag = target_div.find('a', href=lambda href: href and 'releaseinfo' in href)
                if date_tag:
                    date = date_tag.get_text().strip()
                
                # Encontrando a classificação do filme
                rating_tag = movie_soup.find('div', attrs={'data-testid': 'hero-rating-bar__aggregate-rating__score'})
                rating = rating_tag.get_text() if rating_tag else None
                
                # Encontrando a sinopse do filme
                plot_tag = movie_soup.find('span', attrs={'data-testid': 'plot-xs_to_m'})
                plot_text = plot_tag.get_text().strip() if plot_tag else None
                
                # Verificar dados ausentes
                missing_data = []
                if not title:
                    with stats_lock:
                        missing_fields["title"] += 1
                    missing_data.append("título")
                if not date:
                    with stats_lock:
                        missing_fields["date"] += 1
                    missing_data.append("data")
                if not rating:
                    with stats_lock:
                        missing_fields["rating"] += 1
                    missing_data.append("classificação")
                if not plot_text:
                    with stats_lock:
                        missing_fields["plot_text"] += 1
                    missing_data.append("sinopse")
                
                with file_lock:
                    with open('movies.csv', mode='a', newline='', encoding='utf-8') as file:
                        movie_writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
                        if all([title, date, rating, plot_text]):
                            print(f"Filme {movies_written+1}: {title}, {date}, {rating}")
                            movie_writer.writerow([title, date, rating, plot_text])
                            with stats_lock:
                                movies_written += 1
                        else:
                            with stats_lock:
                                movies_skipped += 1
                            print(f"Filme ignorado - Faltando dados: {', '.join(missing_data)}")

def extract_movies(soup):
    movies_table = soup.find('div', attrs={'data-testid': 'chart-layout-main-column'}).find('ul')
    movies_table_rows = movies_table.find_all("li")
    movie_links = ['https://imdb.com' + movie.find('a')['href'] for movie in movies_table_rows]
    total_movies = len(movie_links)
    print(f"\nTotal de filmes encontrados: {total_movies}")
    
    threads = min(MAX_THREADS, total_movies)
    with concurrent.futures.ThreadPoolExecutor(max_workers=threads) as executor:
        futures = [executor.submit(extract_movie_details, link) for link in movie_links]
        concurrent.futures.wait(futures)

def main():
    start_time = time.time()
    
    initialize_csv()
    
    # IMDB Most Popular Movies - 100 movies
    popular_movies_url = 'https://www.imdb.com/chart/moviemeter/?ref_=nv_mv_mpm&sort=user_rating%2Cdesc'
    response = requests.get(popular_movies_url, headers=headers)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Main function to extract the 100 movies from IMDB Most Popular Movies
    extract_movies(soup)
    
    # Exibir estatísticas
    print("\n" + "="*50)
    print("ESTATÍSTICAS DA EXTRAÇÃO:")
    print(f"Total de filmes escritos no CSV: {movies_written}")
    print(f"Total de filmes ignorados: {movies_skipped}")
    print("Campos ausentes:")
    print(f"  - Título: {missing_fields['title']}")
    print(f"  - Data: {missing_fields['date']}")
    print(f"  - Classificação: {missing_fields['rating']}")
    print(f"  - Sinopse: {missing_fields['plot_text']}")
    print("="*50)

    end_time = time.time()
    print(f'Tempo total de execução: {end_time - start_time:.2f} segundos')

if __name__ == '__main__':
    main()
