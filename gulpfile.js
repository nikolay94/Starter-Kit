var gulp = require('gulp');
var gulpIf = require('gulp-if');
var scss = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

/* SCSS */
gulp.task('scss', function(){
	return gulp.src('src/css/*.scss')
	.pipe(gulpIf(isDevelopment, sourcemaps.init()))
	.pipe(scss({outputStyle: 'expanded'}).on('error', scss.logError))
	.pipe(autoprefixer({
        browsers: ['last 15 versions'],
        cascade: false
    }))
	.pipe(gulpIf(isDevelopment, sourcemaps.write()))
	.pipe(gulp.dest('src/css'))
});