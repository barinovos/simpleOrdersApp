(function () {
    'use strict';

    var gulp = require('gulp');
    var inject = require('gulp-inject');
    var sass = require('gulp-sass');
    var prefix = require('gulp-autoprefixer');
    //var babel = require('gulp-babel');

    var paths = {
        public:'./public',
        scss: './public/app/**/*.scss'
    };

    gulp.task('sass', function(){
        var sassOptions = {
            style: 'expanded'
        };

        var injectFiles = gulp.src([
            paths.scss,
            '!' + paths.public + '/app/main.scss'
        ], {read: false});

        var injectOptions = {
            transform: function (filePath) {
                filePath = filePath.replace('../', '');
                return '@import \'' + filePath + '\';';
            },
            starttag: '// injector',
            endtag: '// endinjector',
            addRootSlash: false
        };

        return gulp.src(paths.public + '/app/main.scss')
            .pipe(inject(injectFiles, injectOptions))
            .pipe(sass(sassOptions))
            .pipe(prefix())
            .on('error', function handleError(err) {
                console.error(err.toString());
                this.emit('end');
            })
            .pipe(gulp.dest(paths.public + '/css'));
    });

    gulp.task('watch', function(){
       gulp.watch(paths.public + '/app/scss/**/*.scss', ['sass']);
    });

    gulp.task('dev', ['sass', 'watch']);

    gulp.task('default', ['dev']);
}());

