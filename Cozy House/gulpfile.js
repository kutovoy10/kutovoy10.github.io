// Sass

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass-compile', function() {
  return gulp.src('./sass/**/*.sass')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('./css/'))
})

// Watch

const watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.sass', gulp.series('sass-compile'))
})