'use strict';


// ---
// Setup: load plugins and load tasks
// ---


// Plugins
var gulp         = require('gulp');
var sass         = require("gulp-sass");
var postcss      = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano      = require("cssnano");
var rename       = require("gulp-rename");


// ---
// Functions
// ---

// Compile Appuniversum SCSS files to CSS
// ---
function css() {
  return gulp.src("appuniversum.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("./"))
}

function productionCss() {
  return gulp.src("appuniversum.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename((path) => {
      path.basename += ".min";
    }))
    .pipe(gulp.dest("./"))
}


// Watch folders for changes
// ---
function watchFiles() {
  gulp.watch(project.buildSrc + "/appuniversum/**/*", gulp.parallel('css'));
  gulp.watch("./appuniversum.scss", gulp.parallel('appCss'));
}


// ---
// Tasks
// ---
gulp.task('css', css);
gulp.task('productionCss', productionCss);
gulp.task('watchFiles', watchFiles);


// Default
gulp.task('default', gulp.series(
  'css',
  'productionCss'
));

// Watch
gulp.task('watch', gulp.series(
  'css'
));


