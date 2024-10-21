const nameInput = document.getElementById("name");
const form = document.getElementsByTagName("form");
const sendButton = document.getElementById("btn-send");

sendButton?.addEventListener("click", (e: MouseEvent): void => {
	console.log(e.pageY);
});
