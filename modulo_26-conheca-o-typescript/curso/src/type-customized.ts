// Sometimes we need to build some object or array that contain several variables or methods. For these cases, we can create a new TYPE with the keyword "type". Inside this new type we can define our variables as usual.
type Student = {
	name: string;
	class?: string[];
	age: number;
};

// In this case I'll create a student array of Students. So, I can apply the type Student[] as the type of our array.
const student: Student[] = [
	{
		name: "Fabio",
		class: ["Frontend", "Backend"],
		age: 27,
	},
	{
		name: "Ana",
		class: ["Frontend", "Python"],
		age: 23,
	},
];
const newStudent: Student = {
	name: "Julia",
	class: ["Javascript", "Frontend"],
	age: 29,
};

const anotherStudent: Student = {
	name: "Goku",
	age: 33,
};
student.push(newStudent);
student.push(anotherStudent);

function toShowAStudent(student: Student[]): void {
	console.table(student);
}

toShowAStudent(student);
