require('babel-core/register')
var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("gulp-webpack");
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var jeet = require('jeet');
var mocha = require('gulp-mocha');

// set variable via $ gulp --type production
var environment = gutil.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js').getConfig(environment);

gulp.task('scripts', function() {
	return gulp.src(webpackConfig.entry)
		.pipe(webpack(webpackConfig))
		//.pipe(isProduction ? $.uglify() : $.util.noop())
		.pipe(gulp.dest('www/'))
		// .pipe($.connect.reload());
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./www"
		}
	});
});

gulp.task("test", function() {
	return gulp.src('./src/jsx/tests/**/*.jsx', {read: false})
		.pipe(mocha({reporter: 'spec'}))
});

function styles() {
	return gulp.src('src/styl/*.styl')
		.pipe(plumber())
		.pipe(stylus({
			use: [
				jeet()
			]
		}))
		.pipe(gulp.dest('www/'))
		.pipe(browserSync.reload({stream:true}));
}

gulp.task('default', ['browser-sync'], function () {
	styles()
	watch('src/styl/**/*.styl', styles);
});