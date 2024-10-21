function toSumTwoNumbers(x, y) {
	return x + y;
}
console.log(toSumTwoNumbers(20, 46));

function toSumAllNumbers(...array) {
	// Here I used a REST operator
	return array.reduce((sum, num) => (sum += num), 0);
}
const numbers = Array.from({ length: 30 }, (_, k) => -2 + 2 * k);
console.log(numbers);
console.log(toSumAllNumbers(...numbers)); // Here I used a SPREAD operator

const arrayStrings1 = ["a", "b", "c"];
const arrayStrings2 = ["d", "e", "f", "g", "h"];
const allArrays = [...arrayStrings1, ...arrayStrings2];
console.log(allArrays);

const worker1 = {
	function: "Engineer",
	entryDate: 2020,
	salary: 9000,
};
const worker2 = {
	...worker1,
	salary: 7000,
};
console.table(worker1);
console.table(worker2);

// Destructuring
const { salary: salaryWorker1 } = worker1;
const { salary: salaryWorker2 } = worker2;
console.table(salaryWorker1);
console.table(salaryWorker2);
