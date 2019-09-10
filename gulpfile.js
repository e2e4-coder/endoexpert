var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var resolveRelativeUrls = require('gulp-css-resolve-relative-urls');
var gcmq = require('gulp-group-css-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');


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


gulp.task('BuildCSS Prod', function() {

  return buildCssProd('./local/assets/less','./local/assets/css', 'build.css');

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

function buildCssProd(lessPath, cssPath, buildFilename) {

  return gulp.src([lessPath+'/*.less'])

      .pipe(less())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(concat(buildFilename))
      .pipe(gcmq())
      .pipe(minifyCSS({level: {1: {specialComments: 0}}}))
      .pipe(gulp.dest(cssPath))

}


gulp.task('Sprites', function () {
  var spriteData = gulp.src('local/assets/sprites/*.png').pipe(spritesmith({
    imgName: '../img/sprites.png',
    cssName: '../less/inc/sprites.less',
    imgPath: '/local/assets/img/sprites.png'
  }));
  return spriteData.pipe(gulp.dest('local/assets/css'));
});