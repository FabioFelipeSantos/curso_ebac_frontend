import { CanvasObject } from "./canvasObject.js";

const goldenRatio = (Math.sqrt(5) + 1) / 2;
const section = document.querySelector("#carreira>.container");
const canvas = document.getElementById("spiral");
const contactCanvas = document.getElementById("geometry");
let ctx = canvas.getContext("2d");
let object, object2;

function setCanvasCurriculumSizeAndHeaderHeight() {
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

function setCanvasContactSize() {
	const parentSides = contactCanvas.parentElement.getBoundingClientRect();
	contactCanvas.width = parentSides.width >= 1800 ? parentSides.width : 1750;
	contactCanvas.height = parentSides.height;
}

window.onload = () => {
	setCanvasCurriculumSizeAndHeaderHeight()
	setCanvasContactSize()
	object = new CanvasObject(ctx, canvas.width, canvas.height);
	object.drawStrokeRectangle();
	object.drawFibonacciLines(20);

	object2 = new CanvasObject(contactCanvas.getContext("2d"), contactCanvas.width, contactCanvas.height);
	object2.drawGeometry();
}

window.addEventListener("resize", () => {
	setCanvasCurriculumSizeAndHeaderHeight()
	setCanvasContactSize()
	object = new CanvasObject(ctx, canvas.width, canvas.height);
	object.drawStrokeRectangle();
	object.drawFibonacciLines(20);

	object2 = new CanvasObject(contactCanvas.getContext("2d"), contactCanvas.width, contactCanvas.height);
	object2.drawGeometry();
})

const time = document.getElementById("footer-time");
const actualTime = new Date();
time.innerHTML = actualTime.getFullYear();
time.setAttribute("datetime", actualTime.getFullYear())