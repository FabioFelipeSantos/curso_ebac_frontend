const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourceMaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function compressImages() {
	return gulp.src("./src/images/*").pipe(imagemin()).pipe(gulp.dest("./build/images"));
}

function compressJS() {
	return gulp.src("./src/scripts/*.js").pipe(uglify()).pipe(gulp.dest("./build/scripts"));
}

function compileSass() {
	return gulp
		.src("./src/styles/main.sass")
		.pipe(sourceMaps.init())
		.pipe(
			sass({
				outputStyle: "compressed",
			})
		)
		.pipe(sourceMaps.write("./maps"))
		.pipe(gulp.dest("./build/styles"));
}

exports.default = function () {
	gulp.watch("./src/styles/*.sass", { ignoreInitial: false }, gulp.series(compileSass));
	gulp.watch("./src/scripts/*.js", { ignoreInitial: false }, gulp.series(compressJS));
	gulp.watch("./src/images/*", { ignoreInitial: false }, gulp.series(compressImages));
};
