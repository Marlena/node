
  'use strict';

  var fs = require('fs');
  var path = require('path');

  module.exports = function (dirName, extensionName, callback){


    fs.readdir(dirName, function(err, files){
      if (err){
        return callback(err);
      }

      files = files.filter(function (file){
        return path.extname(file) ===  '.' + extensionName;
      });

      callback(null, files);

    });




  };


