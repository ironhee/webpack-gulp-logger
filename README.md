# Install
```
npm install --save webpack-gulp-logger
```

# Usage

```javascript
var gulp = require('gulp');
var webpackConfig = require('./webpack.config');
var webpackLogger = require('webpack-gulp-logger');

gulp.task('build', function(callback) {
  webpack(webpackConfig).run(webpackLogger(callback));
});
```
