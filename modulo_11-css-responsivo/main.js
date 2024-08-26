const productsMenu = $("#products");

productsMenu.on("click", () => {
	$("#products-submenu").slideToggle(550);
});

$("#products-submenu li a").each((index, element) => {
    $(element).on("click", (e) => {
        e.preventDefault();
        $("#products-submenu").slideUp(450);
    })
});


