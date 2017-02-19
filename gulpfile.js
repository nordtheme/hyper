/*
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Project Gulp File                              +
project    nord-hyper                                     +
repository https://github.com/arcticicestudio/nord-hyper  +
author     Arctic Ice Studio                              +
email      development@arcticicestudio.com                +
copyright  Copyright (C) 2017                             +
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[References]
Gulp
  (http://gulpjs.com)
npmjs
  (https://www.npmjs.com)
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
