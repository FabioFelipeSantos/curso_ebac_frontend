"use strict";
// In this case I'll create a student array of Students. So, I can apply the type Student[] as the type of our array.
const student = [
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
const newStudent = {
    name: "Julia",
    class: ["Javascript", "Frontend"],
    age: 29,
};
const anotherStudent = {
    name: "Goku",
    age: 33,
};
student.push(newStudent);
student.push(anotherStudent);
function toShowAStudent(student) {
    console.table(student);
}
toShowAStudent(student);
