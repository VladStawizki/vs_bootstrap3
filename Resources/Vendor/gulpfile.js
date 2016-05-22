'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');

var config = {
  bootstrapDir: './bower_components/bootstrap-sass',
  publicDir: '../Public',
};

gulp.task('css', function() {
  return gulp.src('./main.scss')
    .pipe(sass({
      includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
  return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('clean-css', ['css'], function() {
  return gulp.src([
      config.publicDir + '/css/*.css',
      '!' + config.publicDir + '/css/*.min.css'
    ])
    .pipe(cleanCss())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('copy-bootsrap-js', function() {
  return gulp.src(config.bootstrapDir + '/assets/javascripts/**/*')
    .pipe(gulp.dest(config.publicDir + '/javascripts'));
});

gulp.task('copy-jquery', function() {
  return gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest(config.publicDir + '/javascripts'));
});

gulp.task('default', [
  'css',
  'fonts',
  'clean-css',
  'copy-bootsrap-js',
  'copy-jquery'
]);
