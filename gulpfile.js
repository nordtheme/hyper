/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <code@svengreb.de>
 *
 * Project:    Nord Hyper
 * Repository: https://github.com/arcticicestudio/nord-hyper
 * License:    MIT
 * References:
 *   http://gulpjs.com
 *   https://www.npmjs.com
 */

/*+---------+
  + Imports +
  +---------+*/
const gulp = require("gulp-help")(require("gulp"));
const eslint = require("gulp-eslint");

/*+-------+
  + Tasks +
  +-------+*/
/**
 * Shows the help.
 *
 * @since 0.1.0
 */
gulp.task("default", ["help"]);

/**
 * Lints the color theme index file.
 *
 * @since 0.1.0
 */
gulp.task("lint", "Lints the color theme index file", () => {
  return gulp.src("index.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
