var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');

// Server dev
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './' //sirviendo ficheros
    }
  })
})

// Process css
gulp.task('css', function () {

  return gulp
    .src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream()) // refrescar navegador
})

// Minify  CSS
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

// Minify JS
gulp.task('minify-js', function (cb) {
  pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('js')
    ],
    cb
  );
});

// Watch changes
gulp.task('watch', function() {
  gulp.watch('./src/*.scss', ['css'])
  gulp.watch('./js/*.js').on('change', browserSync.reload)
  gulp.watch('./*.html').on('change', browserSync.reload)  // ejecuta function cada vez que escuche cambios
})

gulp.task('default', ['watch', 'serve'])