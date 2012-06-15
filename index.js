var fs = require('fs');
var async = require('async');

exports = function (path, callback) {
  callback = callback || function () {};

  if (!path) {
    return callback(new Error('No path specified'));
  }

  async.waterfall([
    fs.readdir.bind(null, path),
    statAllFiles
  ], callback);
};

function statAllFiles (files, callback) {
  async.map(files, fs.stat, callback)
}
