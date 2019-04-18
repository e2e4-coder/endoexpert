var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var resolveRelativeUrls = require('gulp-css-resolve-relative-urls');


gulp.task('BuildCSS', function() {

  return buildCss('./local/assets/less','./local/assets/css', 'build.css');

});

gulp.task('Watch', function() {

  gulp.watch('./local/assets/less/**/*.less', { }, ['BuildCSS']);

});

gulp.task('BuildCSS Moviprep', function() {

  return buildCss('./local/assets/less_moviprep','./local/assets/css', 'build_moviprep.css');

});

gulp.task('Watch Moviprep', function() {

  gulp.watch('./local/assets/less_moviprep/**/*.less', { }, ['BuildCSS Moviprep']);

});


function buildCss(lessPath, cssPath, buildFilename) {

  return gulp.src([lessPath+'/*.less'])
      //.pipe(resolveRelativeUrls(themePath))
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(concat(buildFilename))
      //.pipe(minifyCSS({level: {1: {specialComments: 0}}}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(cssPath))

}