(function(dirName){
  'use strict';

  //Create a program that prints a list of files in a given directory,
  //filtered by the extension of the files. You will be provided a directory name
  //as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

  var fs = require('fs');
  var path = require ('path');

  var directoryName = process.argv[2];
  var fileExtension = '.' + process.argv[3]; //md


  fs.readdir(directoryName, function(err, files) {
    if (err) {
      throw err;
    }

      files.forEach(function (file){
        if (path.extname(file) === '.' + fileExtension){
          console.log(file);
        }
      });

  })


})();
