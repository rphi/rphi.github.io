var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var reload      = browserSync.reload;

var src = {
    scss: 'docs/scss/*.scss',
    css:  'docs/css',
    html: 'docs/*.html'
};
 
// Compile sass into CSS
gulp.task('sass', gulp.series(function() {
    return gulp.src(src.scss)
        .pipe(sass())
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}));
}));
 
// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./docs"
    });

    gulp.watch(src.scss, gulp.series('sass'));
    gulp.watch(src.html).on('change', reload);
}));

gulp.task('default', gulp.series('serve'));
