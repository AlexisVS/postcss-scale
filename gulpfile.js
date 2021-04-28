const gulp = require('gulp');
const postcss = require('gulp-postcss');
const csscomb = require('gulp-csscomb');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcssscale = require('postcss-scale');
const { series } = require('gulp');



async function defaultTask () {
    gulp.task('css', () => {

        var plugins = [
            postcssscale(),
            // csscomb(),
            // autoprefixer({ browsers: ['last 2 version'] }),
        ];

        return gulp.src('./src/**/*.css')
            .pipe(sourcemaps.init())
            // .pipe(postcss(plugins))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./dist'))
    })
}

module.exports = {
    defaultTask()
    // default: series(defaultTask(),)
}