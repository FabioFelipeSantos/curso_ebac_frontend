// ===========================================================================================================
// FOREACH method
// ===========================================================================================================

const socialsMedia = ["Facebook", "Instagram", "YouTube"];

// for (let i = 0; i < socialsMedia.length; i++) {
// 	console.log(`I have an account on ${socialsMedia[i]}!`);
// }

socialsMedia.forEach((social, index) => console.log(`#${index} I have an account on ${social}!`));

// ===========================================================================================================
// MAP method
// ===========================================================================================================

const students = ["Gustav", "Julia", "Paul", "Anna", "Amanda"];

const students2 = students.map((student) => {
	student = {
		name: student,
		course: "Frontend",
	};
	return student;
});

console.log(students2);

const numbers = Array.from({ length: 10 }, (_, k) => k + 1);
const double = numbers.map((num) => num * 2);

console.log(double);

// ===========================================================================================================
// FIND method
// ===========================================================================================================
const _name = "Anna";
const hasAnna = students2.find((student) => student.name === _name) ? "Yes" : "No";
console.log(hasAnna);

// ===========================================================================================================
// FINDINDEX method
// ===========================================================================================================
const name2 = "Paulo";
const indexPaul = students2.findIndex((student) => student.name === name2);
console.log(indexPaul);

// ===========================================================================================================
// EVERY method
// ===========================================================================================================
const isAllGreaterThan2 = double.every((num) => num >= 2);
console.log(isAllGreaterThan2);

// ===========================================================================================================
// SOME method
// ===========================================================================================================
const isSomeLessThan2 = double.some((num) => num < 2);
console.log(isSomeLessThan2);

// ===========================================================================================================
// REDUCE method
// ===========================================================================================================
const range = Array.from({ length: 50 }, (_, k) => 1 + 3 * k);

const sum = range.reduce((acc, item) => {
	return acc + item;
}, 0);
console.log(sum);

const sumMultipleOfFour = range.reduce((acc, item) => {
	return item % 4 === 0 ? acc + item : acc;
}, 0);

console.log(sumMultipleOfFour);

const allStudents = "The students are: ".concat(
	students.reduce((acc, item, index) => {
		if (index < students.length - 1) {
			return (acc += `${item}, `);
		} else {
			return (acc += `${item}!`);
		}
	}, "")
);

console.log(allStudents);
