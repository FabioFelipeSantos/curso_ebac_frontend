export class CanvasObject {
	constructor(ctx, width, height) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.ctx.strokeStyle = "hsl(40, 100%, 65%)";
		this.ctx.fillStyle = "hsl(120, 100%, 50%)";
		this.ctx.globalAlpha = 0.15;
		this.ctx.lineWidth = 2;
	}

	drawStrokeRectangle() {
		this.ctx.strokeRect(0, 0, this.width, this.height);
	}

	circle(l, thetaI, thetaF, type = "stroke") {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(0, 0, l, thetaI, thetaF);
		type === "stroke" ? this.ctx.stroke() : this.ctx.fill();
		this.ctx.restore();
	}

	triangle(A, B, C) {
		this.ctx.globalAlpha = 1;

		this.ctx.moveTo(A[0], A[1]);
		this.ctx.lineTo(B[0], B[1]);
		this.ctx.stroke();

		this.ctx.lineTo(C[0], C[1]);
		this.ctx.stroke();

		this.ctx.lineTo(A[0], A[1]);
		this.ctx.stroke();
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
			this.circle(L, - Math.PI / 2, 0);
			previous = L;
		}
	}

	drawGeometry() {
		this.ctx.strokeStyle = "hsl(40, 100%, 90%, 0.3)";
		this.ctx.fillStyle = "hsl(120, 100%, 85%, 0.3)";

		const triangleSide = this.width * 0.6;
		const triangleHeight = triangleSide * Math.sqrt(3) / 2;
		const startBottom = this.height * 0.95;
		const A = [0, startBottom];
		const B = [triangleSide, startBottom];

		const C = [triangleSide / 2, startBottom - triangleHeight];
		const G = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];

		this.triangle(A, B, C);

		this.ctx.save();
		this.ctx.translate(G[0], G[1]);
		this.circle(triangleHeight / 3, 0, 2 * Math.PI);
		this.ctx.restore();

		this.ctx.strokeRect(
			G[0] - (triangleHeight / 3) * Math.cos(Math.PI / 4),
			G[1] - (triangleHeight / 3) * Math.sin(Math.PI / 4),
			2 * (triangleHeight / 3) * Math.sin(Math.PI / 4),
			2 * (triangleHeight / 3) * Math.sin(Math.PI / 4)
		)

		const gradient = this.ctx.createLinearGradient(A[0], A[1], B[0], C[1]);
		gradient.addColorStop(0.1, "hsl(5, 100%, 40%)");
		gradient.addColorStop(0.2, "hsl(200, 100%, 40%)");
		gradient.addColorStop(0.5, "hsl(45, 100%, 40%)");
		gradient.addColorStop(0.7, "hsl(310, 100%, 40%)");
		gradient.addColorStop(0.8, "hsl(115, 100%, 40%)");
		gradient.addColorStop(0.9, "hsl(335, 100%, 40%)");
		gradient.addColorStop(1, "hsl(260, 100%, 40%)");

		this.ctx.lineWidth = 2.5;
		this.ctx.strokeStyle = gradient;
		this.ctx.beginPath();
		this.ctx.moveTo(A[0], A[1]);
		this.ctx.lineTo(G[0] - (triangleHeight / 3) * Math.cos(Math.PI / 4),
			G[1] + (triangleHeight / 3) * Math.sin(Math.PI / 4));
		this.ctx.lineTo(G[0] - (triangleHeight / 3) * Math.cos(Math.PI / 4),
			G[1] - (triangleHeight / 3) * Math.sin(Math.PI / 4));
		this.ctx.arc(G[0], G[1], triangleHeight / 3, - 3 * Math.PI / 4, - Math.PI / 4);
		this.ctx.moveTo(G[0] + (triangleHeight / 3) * Math.cos(Math.PI / 4),
			G[1] - (triangleHeight / 3) * Math.sin(Math.PI / 4))
		this.ctx.lineTo(C[0], C[1]);
		this.ctx.lineTo(B[0], B[1]);
		this.ctx.lineTo(G[0], B[1]);
		this.ctx.arc(G[0], G[1], triangleHeight / 3, Math.PI / 4, Math.PI / 2);
		this.ctx.moveTo(G[0] + (triangleHeight / 3) * Math.cos(Math.PI / 4),
			G[1] + (triangleHeight / 3) * Math.sin(Math.PI / 4));
		this.ctx.lineTo(G[0], G[1]);
		this.ctx.stroke();
		this.ctx.translate(G[0], G[1]);
		this.circle(5, 0, 2 * Math.PI, "fill");
	}
}

