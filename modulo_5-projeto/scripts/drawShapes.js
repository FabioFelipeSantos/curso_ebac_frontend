import { sides } from "./getSidesLength.js";

const canvas = document.getElementById("espiral");

canvas.setAttribute("width", `${sides.width}px`);
canvas.setAttribute("height", `${sides.height}px`);

export function drawRectangle(color, strokeWidth) {
  const externalRectangle = canvas.getContext("2d");

  externalRectangle.lineWidth = strokeWidth;
  externalRectangle.strokeStyle = color;
  externalRectangle.strokeRect(0, 0, sides.width, sides.height);
}