window.addEventListener("DOMContentLoaded", function () {
  const movieChoice = document.querySelector(".movies__select__title");
  movieChoice.addEventListener("click", function () {
    this.classList.contains("movies__select__title--is-opened")
      ? this.classList.remove("movies__select__title--is-opened")
      : this.classList.add("movies__select__title--is-opened");
  });
});
