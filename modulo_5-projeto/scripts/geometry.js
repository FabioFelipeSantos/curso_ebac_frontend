import { sides } from "./getSidesLength.js";

export function geometryConstruction(numSquares) {
  const squaresSide = [];
  const angles = [];
  const center = [];
  const endLineFromCenter = [];

  for (let i = 0; i < numSquares; i++) {
    squaresSide.push(sides.width / Math.pow(sides.goldenRatio, i));
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
  }

  return {
    squaresSide: squaresSide,
    angles: angles,
    center: center,
    endLineFromCenter: endLineFromCenter
  }
}