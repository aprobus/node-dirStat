# dirStat

Run stat on all files in a directory

## Examples

```javascript
var dirStat = require('dirStat').dirStat;
dirStat(__dirname, function (err, results) {
    //results[0].fileName
    //results[0].ctime
}
````

The results is an array of the files. Each file has the results of stat on that file, as well as as 'fileName' and
'filePath' for identifying the file.

## Download

````
npm install dirStat
````