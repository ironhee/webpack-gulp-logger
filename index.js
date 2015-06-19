var colors = require("colors");
var gutil = require("gulp-util");

module.exports = function webpackLogger (callback) {
  return function (err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack] Build success:".yellow, stats.toString({
      hash: false,
      version: false,
      cached: false,
      colors: true
    }));
    if (callback) {
      callback();
    }
  };
}
