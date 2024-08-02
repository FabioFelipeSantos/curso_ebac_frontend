import { geometryConstruction } from "./geometry.js";
import { sides } from "./getSidesLength.js";

export function drawSquares(midLines, numSquares, color, strokeWidth) {
  midLines.lineWidth = strokeWidth;
  midLines.strokeStyle = color;
  const geometry = geometryConstruction(numSquares);

  for (let i = 0; i < numSquares; i++) {

    if (i === 0) {
      midLines.beginPath();
    } else if (i === numSquares - 1) {
      midLines.stroke();
      midLines.closePath();
    }

    midLines.moveTo(geometry.center[i][0], geometry.center[i][1]);
    midLines.lineTo(geometry.endLineFromCenter[i][0], geometry.endLineFromCenter[i][1]);
    midLines.moveTo(geometry.center[i][0], geometry.center[i][1]);
  }
}

export function drawSpiral(numSquares, color, strokeWidth) {
  const espiral = canvas.getContext("2d");
  espiral.lineWidth = strokeWidth;
  const geometry = geometryConstruction(numSquares);

  if (!Array.isArray(color)) {
    espiral.strokeStyle = color;
  } else {
    const lineargradient = espiral.createLinearGradient(0, 0, sides.width, sides.height);
    const numberOfColors = color.length;

    for (let i = 0; i < numberOfColors; i++) {
      const gradientPoint = (1 / (numberOfColors - 1)) * i;
      lineargradient.addColorStop(gradientPoint, color[i]);
    }
    espiral.strokeStyle = lineargradient;
  }

  for (let i = 0; i < numSquares; i++) {
    if (i === 0) {
      espiral.beginPath();
      espiral.arc(
        geometry.center[i][0],
        geometry.center[i][1],
        geometry.squaresSide[i],
        -Math.PI / 2,
        geometry.angles[i]
      );
    } else {
      espiral.arc(
        geometry.center[i][0],
        geometry.center[i][1],
        geometry.squaresSide[i],
        geometry.angles[i - 1],
        geometry.angles[i]
      );

      if (i === numSquares - 1) {
        espiral.stroke()
        espiral.closePath();
      }
    }
  }
}