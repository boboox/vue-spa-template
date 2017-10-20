var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');
var del = require('del');
var bs = browserSync.create();

// mock服务
gulp.task('mock', function (cb) {
    nodemon({
        script: './mock-server/bin/www',
        ext: 'js',
        watch: ['./mock-server/routes/', './mock-server/entities/']
    }).on('restart', function () {
        console.log('Mock Server Restarted!');
    });
    cb();
});

gulp.task('static', function () {
    return gulp.src(['./libs/cordova/**'])
        .pipe(gulp.dest('./dist/libs/cordova'))
        .pipe(bs.stream());
});

gulp.task('favicon', function () {
    return gulp.src(['./src/favicon.ico'])
        .pipe(gulp.dest('./dist/'))
        .pipe(bs.stream());
});

gulp.task('bs', function () {
    bs.init({
        proxy: {
            target: "http://localhost:8090"
        },
        port: 4002
    });
    gulp.watch('./dist/**/**/*.{html,js,css,png,jpeg,jpg,gif,svg}').on('change', bs.reload);
});

gulp.task('mock-bs', function (cb) {
    runSequence('mock', 'bs', cb);
});

gulp.task('prepare', function (cb) {
    runSequence('clear-dist', 'favicon', 'static', cb);
});

gulp.task('clear-dist', function () {
    return del(['./dist/*']);
});
