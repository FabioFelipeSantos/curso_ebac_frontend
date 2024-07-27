const goldenRatio = (Math.sqrt(5) + 1) / 2;
const w = 880;
const h = w * goldenRatio;

export const sides = {
  width: w,
  height: h
};

export function setHeightOfCarreiraSection() {
  const carreiraSection = document.getElementById("carreira");
  carreiraSection.style.height = `${sides.height + 32 * 2}px`;
}