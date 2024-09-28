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
});