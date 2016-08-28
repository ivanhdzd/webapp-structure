'use strict';

const gulp = require('gulp');
var browserSync = require('browser-sync').create();
const gulpLoadPlugins = require('gulp-load-plugins');

var wiredep = require('wiredep').stream;

const plugins = gulpLoadPlugins();

const views = 'app/*.html';
const viewsRoot = 'app/';

/**
 * Default task
 * It's default task executed when run gulp only
 * Before execute itself, it executes bower-components tasks
 */
gulp.task('default', ['bower-components-injection'], () => {
    console.log('All bower components injected successfully.');
});

/**
 * wiredep inject all bower components inside index.html
 * Below there are more information about wiredep
 * https://coderwall.com/p/vtkdbg/inject-js-and-css-into-html-using-gulp
 */
gulp.task('bower-components-injection', () => {
    gulp.src(views)
        .pipe(wiredep())
        .pipe(gulp.dest(viewsRoot))
        .pipe(plugins.notify('All bower components injected successfully.'));
});

/**
 * https://www.browsersync.io/docs/gulp
 */
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
});