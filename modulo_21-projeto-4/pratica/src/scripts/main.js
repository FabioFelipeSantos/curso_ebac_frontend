window.addEventListener("DOMContentLoaded", function () {
  const movieChoice = document.querySelector(".movies__select__title");

  movieChoice.addEventListener("click", function () {
    this.classList.contains("movies__select__title--is-opened")
      ? this.classList.remove("movies__select__title--is-opened")
      : this.classList.add("movies__select__title--is-opened");

    closeMoviesOptions();
  });

  const moviesListSelect = document.querySelectorAll("[data-movie-select]");

  moviesListSelect.forEach((movie) => {
    movie.addEventListener("click", closeMoviesOptions);
    movie.addEventListener("click", (e) => sowFilmTab(e));
  });
});

function sowFilmTab(event) {
  const activeMovie = event.target.parentNode.dataset.movieSelect;

  const allMoviesTab = document.querySelectorAll("[data-selected-movie]");

  allMoviesTab.forEach((movieElement) => {
    const movieName = movieElement.dataset.selectedMovie;
    if (movieName === activeMovie) {
      !movieElement.classList.contains("movies__list__item--is-active")
        ? movieElement.classList.add("movies__list__item--is-active")
        : "";
    } else {
      movieElement.classList.contains("movies__list__item--is-active")
        ? movieElement.classList.remove("movies__list__item--is-active")
        : "";
    }
  });
}

function closeMoviesOptions() {
  const moviesSelectList = document.querySelector(".movies__select__list");
  moviesSelectList.classList.contains("movies__select__list--is-opened")
    ? moviesSelectList.classList.remove("movies__select__list--is-opened")
    : moviesSelectList.classList.add("movies__select__list--is-opened");
}
