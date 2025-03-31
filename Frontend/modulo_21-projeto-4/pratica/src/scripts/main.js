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
    movie.addEventListener("click", (e) => {
      movieChoice.textContent = movie.children[0].textContent;
      sowFilmTab(e);
    });
  });

  const trailerButton = document.querySelectorAll("[data-trailer]");
  trailerButton.forEach((btn) => {
    btn.addEventListener("click", showTrailerModal);
  });

  const trailersModal = document.querySelectorAll("[data-close-trailer]");
  trailersModal.forEach((btn) => {
    btn.addEventListener("click", closeTrailerModal);
  });

  window.addEventListener("click", closeModalClickingOutsideModal);
});

function closeModalClickingOutsideModal(event) {
  const filmContainer =
    document.querySelectorAll(`[data-movie-trailer]`)[0].parentNode;

  // The reason why we must use "==" as comparison operator is that when the modal is open, your most exterior container should occupy te whole screen, so, when the user clicks outside the modal, it'll click on the modal's outside container.
  if (event.target == filmContainer) {
    filmContainer.classList.remove("modals--is-open");
  }
}

function closeTrailerModal(event) {
  const film = event.target.dataset.closeTrailer;
  const filmTrailer = document.querySelector(`[data-movie-trailer=${film}]`);
  const filmContainer = filmTrailer.parentNode;

  filmTrailer.classList.remove("modals__ctn--is-open");
  filmContainer.classList.remove("modals--is-open");
}

function showTrailerModal(event) {
  const film = event.target.dataset.trailer;
  console.log(film);
  const filmTrailer = document.querySelector(`[data-movie-trailer=${film}`);
  console.log(filmTrailer);
  const filmContainer = filmTrailer.parentNode;
  console.log(filmContainer);

  !filmTrailer.classList.contains("modals__ctn--is-open")
    ? filmTrailer.classList.add("modals__ctn--is-open")
    : "";

  !filmContainer.classList.contains("modals--is-open")
    ? filmContainer.classList.add("modals--is-open")
    : "";
}

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
