let
	gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSyns = require('browser-sync'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	del = require('del'),
	autoprefixer = require('gulp-autoprefixer');

// html

gulp.task('html', function () {
	return gulp.src('app/*.html')
		.pipe(browserSyns.reload({ stream: true }))
});

// script

gulp.task('script', function () {
	return gulp.src('app/js/*.js')
		.pipe(browserSyns.reload({ stream: true }))
});

// scss
gulp.task('scss', function () {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 8 versions']
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSyns.reload({ stream: true }))
});

// libs to css

gulp.task('css', function () {
	return gulp.src([
		'node_modules/normalize.css/normalize.css',
		'node_modules/slick-carousel/slick/slick.css'
	])
		.pipe(concat('_libs.scss'))
		.pipe(gulp.dest('app/scss'))
		.pipe(browserSyns.reload({ stream: true }))
});

// js

gulp.task('js', function () {
	return gulp.src([
		'node_modules/slick-carousel/slick/slick.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSyns.reload({ stream: true }))
});

// browser-sync

gulp.task('browser-sync', function () {
	browserSyns.init({
		server: {
			baseDir: "app/"
		}
	})
});

// create dist -> transfer to dist

gulp.task('export', function () {
	let buildHtml = gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist'))

	let buildCss = gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('dist/css'))

	let buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'))

	let buildFonts = gulp.src('app/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'))

	let buildImg = gulp.src('app/img/**/*.*')
		.pipe(gulp.dest('dist/img'))
});

// clean

gulp.task('clean', async function () {
	del.sync('dist');
});

// build -> finish project

gulp.task('build', gulp.series('clean', 'export'));

// watch

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
	gulp.watch('app/*.html', gulp.parallel('html'))
	gulp.watch('app/js/*.js', gulp.parallel('script'))
});

// default

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));