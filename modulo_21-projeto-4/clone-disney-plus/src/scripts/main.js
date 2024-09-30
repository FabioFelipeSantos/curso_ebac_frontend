document.addEventListener("DOMContentLoaded", function () {
	const tabButtons = document.querySelectorAll("[data-tab-button]");
	const panels = document.querySelectorAll("[data-tab-id]");

	tabButtons.forEach((button) => {
		button.addEventListener("click", function (event) {
			const clickedTab = event.target.dataset.tabButton;

			tabButtons.forEach((btn) => {
				if (btn.dataset.tabButton === clickedTab) {
					btn.classList.add("shows__tabs__button--is-active");
				} else {
					btn.classList.remove("shows__tabs__button--is-active");
				}
			});

			panels.forEach((panel) => {
				if (panel.dataset.tabId === clickedTab) {
					panel.classList.add("shows__list--is-active");
				} else {
					panel.classList.remove("shows__list--is-active");
				}
			});
		});
	});

	const questions = document.querySelectorAll("[data-faq-question]");

	questions.forEach((question) => {
		question.addEventListener("click", abreOuFechaResposta);
	});

	const heroHeight = document.querySelector(".hero").clientHeight;
	const header = document.querySelector(".header");

	window.addEventListener("scroll", function () {
		const actualPosition = window.scrollY;

		if (actualPosition < heroHeight) {
			if (!header.classList.contains("header--is-hidden")) {
				header.classList.add("header--is-hidden");
			}
		} else {
			if (header.classList.contains("header--is-hidden")) {
				header.classList.remove("header--is-hidden");
			}
		}
	});
});

function abreOuFechaResposta(element) {
	const classIsOpen = "faq__questions__item--is-open";
	const parentElement = element.target.parentNode;

	parentElement.classList.toggle(classIsOpen);
}
