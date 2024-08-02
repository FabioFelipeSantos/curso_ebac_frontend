

export const sides = {
  width: w,
  height: h,
  goldenRatio: goldenRatio
};

export function setHeightOfCarreiraSection() {
  const carreiraSection = document.getElementById("carreira");
  carreiraSection.style.height = `${sides.height + 32 * 2}px`;
}