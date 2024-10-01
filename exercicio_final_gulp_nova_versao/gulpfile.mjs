import gulp from 'gulp';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import obfuscate from 'gulp-obfuscate'

function comprimirImagens(){
    return gulp.src('./src/img/*', {encoding : false})
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
}

function comprimirJavaScript(){
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./dist/js'))
}

function compilarSass(){
    return gulp.src('./src/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'))
}






export default  function(){
    gulp.watch('./src/styles/*.scss',{ ignoreInitial : false}, gulp.series(compilarSass));
    gulp.watch('./src/js/*.js',{ ignoreInitial : false}, gulp.series(comprimirJavaScript));
    gulp.watch('./src/img/*', {ignoreInitial : false}, gulp.series(comprimirImagens));
}
