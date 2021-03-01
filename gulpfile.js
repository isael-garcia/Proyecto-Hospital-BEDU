const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css(){
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist : ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(gulp.dest('css-gulp'));
}
    //tareas 
    gulp.task('css-gulp', css);

    function watchFiles(){
        gulp.watch('scss/*.scss', css)
        gulp.watch('*.html');
    }
    gulp.task('watch', gulp.parallel(watchFiles));

const fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function() {
  gulp.src(['contacto.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});