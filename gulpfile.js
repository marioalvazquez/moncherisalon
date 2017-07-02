'use strict';

//Required libraries
const gulp = require('gulp');
const webserver = require('gulp-webserver');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');


gulp.task('webserver', () => {
  gulp.src('app')
    .pipe(webserver({
      host: "localhost",
      port: 80,
      livereload: true,
      open: true
    }));
});

gulp.task('minify-css', () =>{
  return gulp.src('./dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./app/css'))
});

gulp.task('sass', () => {
  return gulp.src('./src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', () => {
  gulp.watch('./src/sass/*.scss', ['sass']);
  gulp.watch('./dist/css/*.css', ['minify-css']);
})

gulp.task('default', ['webserver', 'watch']);
