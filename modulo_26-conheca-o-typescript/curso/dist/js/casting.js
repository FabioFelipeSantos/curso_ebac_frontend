"use strict";
// let isRaining: number = 3;
// The code before trow an error, because the variable "height" is set in another file. Uncomment to see the error.
// Typescript don't allow that variables have the same name. This concept is called NAMESPACE.
// Namespace is a paradigm that create virtual folders for files that are inside these folders.
// To solve this problem we can create a namespacing for this file, creating a virtual folder for him.
var casting;
(function (casting) {
    let isRaining = 3;
    // Casting allow you to change the TYPE of a variable to any type that you want.
    isRaining.toFixed(); // Using a method only for numbers
    isRaining.toLowerCase(); // Using a method only for strings
    isRaining.forEach((x) => console.log(x)); // Using a method only for arrays
    // It's obvious that the last two uses for casting will throw an error, because the isRaining is only the number 3.
    // Another case of using casting is to change a TYPE for a variable.
    let age = 36;
    age.split(""); // Pay attention that, all methods for the new TYPE are available. But we must be very careful when using this new variable.
})(casting || (casting = {}));
// Typescript isn't a new code language, it's just a SUPERSET of JavaScript, adding new ways to work with variables by applying TYPEs to them.
// We can look for the compiled file with typescript extension TS and see that it will have a JS extension. This enforce the fact that Typescript is not a new language, but new tools for JavaScript.
// In this context, TS will just be used in the Development stage of our project. At the time to build for distribution, all TS files will be converted to JS files, and the browser will work above these JS files.
