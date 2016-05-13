// Clean build directory

var gulp          = require('gulp'),
    del           = require('del');

gulp.task('clean', function() {
  del(['./static/*', '!./static/.git', '!./static/.gitignore'])
});

gulp.task('clean-partials', function() {
  del([
    './static/partial',
    './static/_base.html'
  ])
});
