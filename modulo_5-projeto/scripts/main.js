import { CanvasObject } from "./canvasObject.js";

const goldenRatio = (Math.sqrt(5) + 1) / 2;
const section = document.querySelector("#carreira>.container");
const canvas = document.getElementById("spiral");
let ctx = canvas.getContext("2d");
let object;

function setCanvasSizeAndHeaderHeight() {
	section.style.height = `fit-content`;
	const sectionSizes = section.getBoundingClientRect();
	let elementHeight = sectionSizes.height;
	let elementWidth = elementHeight / goldenRatio;

	if (elementWidth > sectionSizes.width) {
		canvas.style.right = `${-(elementWidth - sectionSizes.width) / 2}px`;
	}

	canvas.width = elementWidth;
	canvas.height = elementHeight;
	// console.log(elementWidth, elementHeight);
}

window.onload = () => {
	setCanvasSizeAndHeaderHeight()
	object = new CanvasObject(ctx, canvas.width, canvas.height);
	object.drawStrokeRectangle();
	object.drawFibonacciLines(20);
}

window.addEventListener("resize", () => {
	setCanvasSizeAndHeaderHeight()
	object = new CanvasObject(ctx, canvas.width, canvas.height);
	object.drawStrokeRectangle();
	object.drawFibonacciLines(20);
})