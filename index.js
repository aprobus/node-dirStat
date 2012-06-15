var fs = require('fs');
var path = require('path');
var async = require('async');

exports.dirStat = function (dirPath, callback) {
  callback = callback || function () {};

  if (!dirPath) {
    return callback(new Error('No path specified'));
  }

  async.waterfall([
    fs.readdir.bind(null, dirPath),
    statAllFiles
  ], callback);

  function statAllFiles (files, callback) {
    var filesWithPath = files.map(function (fileName) {
      return path.join(dirPath, fileName);
    });

    async.map(filesWithPath, fs.stat, function (err, results) {
      if (err) {
        return callback(err);
      }

      for (var i = 0; i < results.length; i++) {
        results[i].fileName = files[i];
        results[i].filePath = filesWithPath[i];
      }

      callback(null, results);
    });
  }
};
