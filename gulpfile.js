var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');

gulp.task('js', function () {
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/js'));
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('build/js'));
});

gulp.task('css', function () {
  gulp.src('src/less/notifications.less')
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/css'));
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['build']);
