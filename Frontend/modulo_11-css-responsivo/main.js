const productsMenu = $("#products-link");

productsMenu.on("click", () => {
	$("#products-submenu").slideToggle(550);
});

$("#products-submenu li a").each((index, element) => {
	$(element).on("click", (e) => {
		e.preventDefault();
		$("#products-submenu").slideUp(450);

		$("html").animate(
			{
				scrollTop: $($(".one-product")[index]).offset().top * 0.98,
			},
			800
		);
	});
});

$("#main-menu a[href='#about']").on("click", (e) => {
	e.preventDefault();
	const aboutTitle = $("#about");

	$("html").animate(
		{
			scrollTop: aboutTitle.offset().top,
		},
		500
	);
});

$("#open-know-more").on("click", function (e) {
	e.preventDefault();

	const positionBeforeScroll = $(window).scrollTop();

	$(window).on("scroll", function (e) {
		e.preventDefault();
		$(window).scrollTop(positionBeforeScroll);
	});

	$("#know-more").fadeIn(400);
});

$(".back-option").each(function (index, element) {
	$(element).on("click", function (e) {
		e.preventDefault();
		$("#know-more").fadeOut(400);
		$(window).off("scroll");
	});
});
