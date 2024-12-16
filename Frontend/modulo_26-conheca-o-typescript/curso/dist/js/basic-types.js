"use strict";
// For a BOOLEAN type, just true or false are the options available.
let isRaining = false;
isRaining = true;
// A type assign as NUMBER don't differentiate integer or real numbers. All numbers are available.
let height = 2;
height = 2.56;
// For STRING type, any string is able to be assigned.
const myName = "Fabio Santos";
// To ARRAY types, we can't sign different variables types, just one. For example: an array set as number, just will be able to receive numbers. Other types as string or boolean won't be accept.
const roommates = ["Maria", "Gascoigne", "Ludwig", "Laurence", "Amelia", "Micolash"];
const technologies = ["js", "sass", "jsx"];
// The READONLYARRAY type will omit some methods from javascript's array type, as .push, .shift, etc. You will only be able to read the values in the array, and won't change them.
const grades = [7, 9, 6, 5];
// The TUPLA type allow you set different types to an array.
const student_1 = ["Fabio", true, 3, 36];
// The UNION operator ( "|" - pipe symbol) allow we set more than one type for a variable.
let isOpen = false;
isOpen = 1;
// The ANY type is available for we can be able to set any type for a variable. This type is usually used for backend fetches where we don't know the type of a variable a priori. So, we set ANY to the data we get. However, we must be very careful when using the ANY type, because if we use it for any variable, Typescript will lose its your purpose.
let apiData;
apiData = 210;
apiData = true;
apiData = [1, 2, 3];
apiData = [true, "true", { isSomething: true }, 1, "0"];
apiData = "Oh my goodness, what am I doing with this variable?";
