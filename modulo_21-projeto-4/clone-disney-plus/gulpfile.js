const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");

function styles() {
	return gulp
		.src("./src/styles/*.sass")
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "compressed" }))
		.pipe(sourcemaps.write("./maps"))
		.pipe(gulp.dest("./dist/css"));
}

function images() {
	return gulp
		.src("./src/assets/img/**/*", { encoding: false })
		.pipe(imagemin())
		.pipe(gulp.dest("./dist/img"));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function () {
	gulp.watch("./src/styles/*.sass", gulp.parallel(styles));
};
