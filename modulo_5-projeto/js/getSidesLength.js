export default function getSidesLength() {
  const canvas = document.getElementById("espiral");
  const goldenRatio = (Math.sqrt(5) + 1) / 2;
  const w = 880;
  const h = w * goldenRatio;

  console.log(w, h)

  return { width: w, height: h };
};