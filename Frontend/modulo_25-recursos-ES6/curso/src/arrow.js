const myFunction = () => console.log("Hy");

myFunction();

const car = () => ({
	model: "Ranger",
	branch: "Ford",
	year: 2024,
	velocity: 40,

	speedUp: function () {
		this.velocity += 10;
	},

	slowDown() {
		this.velocity -= 10;
	},

	// slowDown: () => {
	// 	this.velocity -= 10;
	// },
});

const myCar = car();

console.table(myCar);
myCar.speedUp();
myCar.speedUp();
myCar.speedUp();
console.table(myCar);
myCar.slowDown();
myCar.slowDown();
console.table(myCar);
