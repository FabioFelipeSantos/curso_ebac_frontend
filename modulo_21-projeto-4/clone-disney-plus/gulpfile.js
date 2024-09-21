const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function styles() {
	return gulp
		.src("./src/styles/*.sass")
		.pipe(sass({ outputStyle: "compressed" }))
		.pipe(gulp.dest("./dist/css"));
}

exports.default = styles;
exports.watch = function () {
	gulp.watch("./src/styles/*.sass", gulp.parallel(styles));
};
