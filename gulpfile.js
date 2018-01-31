var gulp = require('gulp'),
    autoprefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    coffee = require('gulp-coffee'),
    haml = require('gulp-ruby-haml'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-server-livereload'),
    copy = require('gulp-copy'),
    bower = require('gulp-bower');
 
    
var paths = {
  coffee: ['./coffee/**/*.coffee'],
  haml: ['./haml/**/*.haml'],
  sass: ['./sass/**/*.sass', './sass/**/*.scss'],
  js: ['./js/*.js', './bower_components/jquery/dist/jquery.js', './bower_components/foundation-sites/dist/js/foundation.js'],
  image: ['./img/**/*.svg','./img/**/*.png', './img/**/*.jpg', './img/**/*.gif']
}

gulp.task('default', ['bower', 'coffee', 'haml', 'sass', 'copy-image', 'copy-js', 'watch', 'webserver']);

gulp.task('build', ['bower', 'coffee', 'haml', 'sass', 'copy-image', 'copy-js']);

gulp.task('bower', function() {
  return bower();
});

gulp.task('copy-image', function() {
  gulp.src(paths.image)
    .pipe(gulp.dest('./www/img/'))
});

gulp.task('copy-js', function() {
  gulp.src(paths.js)
    .pipe(gulp.dest('./www/js/'))
});

gulp.task('coffee', function() {
  gulp.src(paths.coffee[0])
    .pipe(coffee())
    .pipe(gulp.dest('./www/js/'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('haml', function() {
  gulp.src(paths.haml[0])
    .pipe(haml())
    .pipe(gulp.dest('./www/'));
});

gulp.task('sass', function() {
  gulp.src('./sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix({ browsers: ['> 1%'] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./www/css/'))
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'));
});

gulp.task('webserver', function() {
  gulp.src('./www')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('watch', function() {
  gulp.watch(paths.coffee[0], ['coffee']);
  gulp.watch(paths.haml[0], ['haml']);
  gulp.watch(paths.sass[0], ['sass']);
});