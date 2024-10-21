"use strict";
const nameInput = document.getElementById("name");
const form = document.getElementsByTagName("form");
const sendButton = document.getElementById("btn-send");
sendButton === null || sendButton === void 0 ? void 0 : sendButton.addEventListener("click", (e) => {
    console.log(e.pageY);
});
