// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint      = require('gulp-jshint');
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync');

//send html to build folder
gulp.task('copy', function(){
  gulp.src('*.html')
  .pipe(gulp.dest('./'));
});

gulp.task('copy-img', function(){
  gulp.src('img/**.*')
  .pipe(gulp.dest('img'));
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src('js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Browser Sync + CSS Injection
gulp.task('browser-sync', function(){
  browserSync.init(['_build/css/*.css','_build/js/*.js','build/img/*.jpg','_build/*.html'],{
    server: {
      baseDir: "./"
    }
  });
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('sass/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.reload({stream:true}));
});

//Reload all browsers
gulp.task('bs-reload', function(){
  browserSync.reload();
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
  .pipe(concat('all.js'))
  .pipe(gulp.dest('js'))
  .pipe(rename('all.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.html',['bs-reload']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts','browser-sync','copy','copy-img','watch']
);
