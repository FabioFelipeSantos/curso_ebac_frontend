import { drawRectangle } from "./drawShapes.js";
import { setHeightOfCarreiraSection } from "./getSidesLength.js";

setHeightOfCarreiraSection();
drawRectangle("hsl(150, 100%, 98%)", 6)

/*
const numSquares = 40;
const squaresSide = [];
const angles = [];
const center = [];
const endLineFromCenter = [];

const midLines = canvas.getContext("2d");

for (let i = 0; i < numSquares; i++) {
  squaresSide.push(w / Math.pow(goldenRatio, i));
  angles.push((Math.PI / 2) * i);

  if (i === 0) {
    center.push([0, squaresSide[i]]);
  }
  else {
    const distanceBetweenCenters = squaresSide[i - 1] - squaresSide[i];
    center.push([
      center[i - 1][0] + distanceBetweenCenters * Math.cos(angles[i - 1]),
      center[i - 1][1] + distanceBetweenCenters * Math.sin(angles[i - 1])
    ]);
  }

  endLineFromCenter.push([
    center[i][0] + squaresSide[i] * Math.cos(angles[i]),
    center[i][1] + squaresSide[i] * Math.sin(angles[i])
  ]);

  if (i === 0) {
    midLines.beginPath();
  } else if (i === numSquares - 1) {
    midLines.stroke();
    midLines.closePath();
  }

  midLines.moveTo(center[i][0], center[i][1]);
  midLines.lineTo(endLineFromCenter[i][0], endLineFromCenter[i][1]);
  midLines.moveTo(center[i][0], center[i][1]);
}

const espiral = canvas.getContext("2d");
espiral.lineWidth = 8;

const lineargradient = espiral.createLinearGradient(0, 0, w, h);
lineargradient.addColorStop(0, "hsl(180, 100%, 88%)");
lineargradient.addColorStop(0.25, "hsl(280, 100%, 75%)");
lineargradient.addColorStop(0.5, "hsl(20, 100%, 65%)");
lineargradient.addColorStop(0.75, "hsl(140, 100%, 55%)");
lineargradient.addColorStop(1, "hsl(10, 100%, 45%)");
espiral.strokeStyle = lineargradient;
for (let i = 0; i < numSquares; i++) {
  if (i === 0) {
    espiral.beginPath();
    espiral.arc(center[i][0], center[i][1], squaresSide[i], -Math.PI / 2, angles[i]);
  } else {
    espiral.arc(center[i][0], center[i][1], squaresSide[i], angles[i - 1], angles[i]);

    if (i === numSquares - 1) {
      espiral.stroke()
      espiral.closePath();
    }
  }
}

const a = "rgb(0 153 255 / 40%)"

*/