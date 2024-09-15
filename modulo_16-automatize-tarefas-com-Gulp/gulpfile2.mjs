import gulp from "gulp";

function funcaoPadrao(callback) {
	setTimeout(() => {
		console.log("Executando via Gulp");
		callback();
	}, 2000);
}

function sayHello(callback) {
	console.log("Hello!");
	sayBye();
	callback();
}

const sayBye = () => console.log("Bye Gulp");

export default gulp.parallel(funcaoPadrao, sayHello);
