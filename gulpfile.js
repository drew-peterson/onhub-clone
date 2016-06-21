var gulp = require('gulp');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var maps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var autoPrefixBrowserList = ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'];


// JS
var srcFiles = ['app/App.js', 'app/src/controllers/**/*.js', 'app/src/services/**/*.js', 'app/src/components/**/*js'];
gulp.task('js', function () { 
  gulp.src(srcFiles) 
  	.pipe(maps.init())
    .pipe(concat('App.js'))
    // .pipe(uglify({mangle: false}))
    .pipe(rename({suffix: '.min'}))
    .pipe(maps.write('./')) 
    .pipe(gulp.dest('public/src'))
    .pipe(livereload());
});


// SCSS
gulp.task('styles', function(){
	return gulp.src('app/application.scss')
	.pipe(maps.init())
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: autoPrefixBrowserList,
		cascade: false
	}))
	.pipe(maps.write('./'))
	.pipe(gulp.dest('public/css'))
	.pipe(livereload());
});


// WATCH
gulp.task('watchFiles', function(){
	livereload.listen();
	gulp.watch(['app/src/**/*.js', 'app/App.js'], ['js']);  // watch js files
	gulp.watch('app/styles/**/*.scss', ['styles']); // watch scss files
})

// SERVE
gulp.task('serve', ['watchFiles']);  










