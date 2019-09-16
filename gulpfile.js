var gulp = require('gulp');
var minifyCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var gcmq = require('gulp-group-css-media-queries');
var autoprefixer = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
var remember = require('gulp-remember');
var gs = gulp.series;
var cached  = require('gulp-cached');
var dependents = require('gulp-dependents');





var lessSrc = ['./local/assets/less/inc/*.less', './local/assets/less/*.less', './local/assets/less/blocks/*.less'];


gulp.task('Build CSS', function ()  {
  return gulp.src(lessSrc)
      .pipe(sourcemaps.init())
      .pipe(cached('css'))
      //.pipe(dependents())
      .pipe(less())
      .pipe(remember('css'))
      .pipe(concat('build.css'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./local/assets/css'));
});

gulp.task('Build CSS Prod', function ()  {
  return gulp.src(lessSrc)
      .pipe(less())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(concat('build.css'))
      .pipe(gcmq())
      .pipe(minifyCSS({level: {1: {specialComments: 0}}}))
      .pipe(gulp.dest('./local/assets/css'));
});


gulp.task('Watch', function () {
  gulp.watch(lessSrc, gs('Build CSS'))
      .on('change', function (event) {
        console.log("event happened:"+JSON.stringify(event));
        if (event.type === 'deleted') {
          //delete from gulp-remember cache
          //emember.forget('sass', event.path);
          //delete from gulp-cached cache
          delete cache.caches['css'][event.path];
        }
      });
});


gulp.task('Sprites', function () {
  var spriteData = gulp.src('local/assets/sprites/*.png').pipe(spritesmith({
    imgName: '../img/sprites.png',
    cssName: '../less/inc/sprites.less',
    imgPath: '/local/assets/img/sprites.png'
  }));
  return spriteData.pipe(gulp.dest('local/assets/css'));
});