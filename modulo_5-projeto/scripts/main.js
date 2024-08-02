import { CanvasObject } from "./canvasObject.js";

const goldenRatio = (Math.sqrt(5) + 1) / 2;
const section = document.querySelector("#carreira>.container");
const canvas = document.getElementById("spiral");
let ctx = canvas.getContext("2d");
let object;

function setCanvasSizeAndHeaderHeight() {
  const elementWidth = +getComputedStyle(section).width.slice(0, -2) * 0.6;
  const elementHeight = elementWidth * goldenRatio;
  section.style.height = `${elementHeight}px`;
  canvas.width = elementWidth;
  canvas.height = elementHeight;
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