//GULP SETTINGS FOR CSS


var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer');


sass.compiler = require('node-sass');

gulp.task('sassToCSS', function () {
    return gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles'));
});

gulp.task('concatMinifyCssTask', function () {
    // return gulp.src('styles/**/*.css') //all files in style dir
    return gulp.src(
        [
            'styles/plugin.css',
            'styles/main.css'
        ])
        .pipe(concatCss("styles/bundle.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))                                            //remove from autoprefixerTask for optimization
        .pipe(minifyCSS({compatibility: 'ie8'}))       //remove from minifyCSSTask for optimization
        .pipe(gulp.dest('dist/'));
});

//minifyCSSTask
/*gulp.task('minifyCSSTask', function () {
    return gulp.src('./dist/styles/bundle.css')
        .pipe(minifyCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});*/


//autoprefixerTask
/*gulp.task('autoprefixerTask', () =>
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);*/


gulp.task('default', gulp.series('sassToCSS', 'concatMinifyCssTask'));

//GULP SETTINGS FOR JS

var concatJS = require("gulp-concat"),
    uglify = require('gulp-uglify');

gulp.task('concatMinifyJS', function () {
    return gulp.src([/*'./js/jquery-3.3.1.js',*//*'./js/popper.min.js',*/'./js/index.js','./js/main.js'])
        .pipe(concatJS('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
});

gulp.task('default', gulp.series('concatMinifyJS'));


//GULP SETTINGS FOR images

var imgOptimize = require('gulp-imagemin');
// var jpegOptimize = require('imagemin-jpegoptim');              //not yet, mb will learn next time

gulp.task('imgOptimizeTask', function (done) {
    gulp.src('./images/**/*')
        .pipe(imgOptimize([
                imgOptimize.gifsicle({interlaced: true}),
                imgOptimize.jpegtran({progressive: true}),
                imgOptimize.optipng({optimizationLevel: 4}),
                imgOptimize.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ])
        )
        .pipe(gulp.dest('dist/images'));
    done();
});

gulp.task('default', gulp.series('imgOptimizeTask'));


//GULP SETTINGS FOR watchers - nothing

var babel = require('gulp-babel');

gulp.task('compileBootstrap', function () {
    return gulp.src('js/bootstrap/index.js')
        .pipe(babel({
            // presets: ['@babel/env']
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('js'))
});

gulp.task('default', gulp.series('compileBootstrap', 'concatMinifyJS'));



// valera's hulpfile.js all things

// var gulp = require('gulp'),
//     concatCss = require('gulp-concat-css'),
//     sass = require('gulp-sass'),
//     minifyCSS = require('gulp-clean-css'),
//     autoprefixer = require('gulp-autoprefixer'),
//
//     concatJS = require("gulp-concat"),
//     uglify = require('gulp-uglify'),
//
//     imgOptimize = require('gulp-imagemin'),/*
//    jpegOptimize = require('imagemin-jpegoptim')*/
//     babel = require('gulp-babel');
//
// gulp.task('compileBootstrap', function () {
//     return gulp.src('js/bootstrap/index.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('js'))
// });
//
// gulp.task('concatMinifyJS', function () {
//     return gulp.src(['./js/jquery-3.3.1.js', './js/index.js', './js/main.js'])
//         .pipe(concatJS('bundle.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('js/'))
// });
// //
// // gulp.task('jsWatcher', function () {
// //     gulp.watch('./js/**/*', ['compileBootstrap', 'concatMinifyJS']);
// // });
//
// gulp.task('default', gulp.series('compileBootstrap', 'concatMinifyJS'));








