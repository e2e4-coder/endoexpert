var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var resolveRelativeUrls = require('gulp-css-resolve-relative-urls');


gulp.task('BuildCSS', function() {

  return buildCss('./local/assets');

});

gulp.task('Watch', function() {

  gulp.watch('./local/assets/less/**/*.less', { }, ['BuildCSS']);

});


function buildCss(themePath) {

  return gulp.src([themePath+'/less/*.less'])
      //.pipe(resolveRelativeUrls(themePath))
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(concat('build.css'))
      //.pipe(minifyCSS({level: {1: {specialComments: 0}}}))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(themePath + '/css'))

}