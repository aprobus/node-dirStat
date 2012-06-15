var path = require('path');
var assert = require('assert');
var fs = require('fs');
var dirStat = require('../index').dirStat;

var testFileDir = path.join(__dirname, 'testFiles');

dirStat(testFileDir, function (err, results) {
  assert.ok(!err);
  assert.ok(results);
  assert.ok(results.length === 2);

  var file1Result = results[0].fileName === 'file1.txt' ? results[0] : results[1];

  fs.stat(path.join(testFileDir, 'file1.txt'), function (err, statResult) {
    assert.equal(file1Result.ctime.toString(), statResult.ctime.toString());
    assert.equal(file1Result.mtime.toString(), statResult.mtime.toString());
  });
});
