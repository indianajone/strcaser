require('babel-register');

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const chai = require('chai');
const istanbul = require('gulp-istanbul');
const remapIstanbul = require('remap-istanbul');
const jshint = require('gulp-jshint');

const config = {
    src: ['src/**/*.js'],
    test: ['test/**/*.js']
};

gulp.task('lint', () => {
    return gulp.src(config.src)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('coverage', () => {
    return gulp.src(config.src)
        .pipe(istanbul())
        .on('error', (e) => console.warn(e))
        .pipe(istanbul.hookRequire())
});

gulp.task('remap-istanbul', ['mocha'], () => {
    const reports = {'json': 'coverage.json', 'html': 'html-report'};
    return gulp.src('coverage/coverage-final.json')
            .pipe(remapIstanbul({reports}));
});

gulp.task('mocha', ['coverage'], () => {
    chai.should();
    return gulp.src(config.test)
        .pipe(mocha())
        .pipe(istanbul.writeReports());
});

gulp.task('test', ['lint', 'mocha']);
gulp.task('default', ['test']);