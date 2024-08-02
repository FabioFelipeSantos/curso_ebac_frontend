export class CanvasObject {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.ctx.strokeStyle = "hsl(0, 100%, 100%)";
    this.ctx.globalAlpha = 0.15;
    this.ctx.lineWidth = 2.5;
  }

  drawStrokeRectangle() {
    this.ctx.strokeRect(0, 0, this.width, this.height);
  }

  circle(l) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.arc(0, 0, l, -Math.PI / 2, 0);
    this.ctx.stroke();
    this.ctx.restore();
  }

  drawFibonacciLines(n) {
    let previous = 0;
    for (let i = 0; i <= n; i++) {
      const L = this.width / Math.pow((1 + Math.sqrt(5)) / 2, i);
      if (i === 0) {
        this.ctx.translate(0, L);
      } else {
        this.ctx.translate(previous - L, 0);
        this.ctx.rotate(Math.PI / 2)
      }
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(L, 0);
      this.ctx.stroke();
      this.circle(L);
      previous = L;
    }
  }
}