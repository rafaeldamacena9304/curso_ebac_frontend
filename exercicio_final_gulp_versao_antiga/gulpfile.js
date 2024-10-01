const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');

function comprimirImagens(){
    return gulp.src('./src/img/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
}

function comprimirJavaScript(){
    return gulp.src('./js/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./dist/js'))
}

function compilarSass(){
    return gulp.src('./src/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'))
}



exports.compilarSass = compilarSass;
exports.default = function(){
    gulp.watch('./src/styles/*.scss',{ ignoreInitial : false}, gulp.series(compilarSass));
    gulp.watch('./src/js/*.js',{ ignoreInitial : false}, gulp.series(comprimirJavaScript));
    gulp.watch('./src/img/*', {ignoreInitial : false}, gulp.series(comprimirImagens));
}
