var jade = require("gulp-jade");
var sass = require("gulp-sass");
var gulp = require("gulp");


gulp.task("default",["watch"],function(){

})

gulp.task("watch",function(){
	gulp.watch("jade/*.jade",["jade"]);
	gulp.watch("sass/*.scss",["sass"])
})

gulp.task("jade",function(){
	gulp.src("jade/*.jade")
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest("html/"))
})

gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass({
		outputStyle: "expanded"
	}))
	.pipe(gulp.dest("css/"))
})