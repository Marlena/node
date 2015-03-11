(function(){
  'use strict';
  //Write a program that uses a single asynchronous filesystem
  //operation to read a file and print the number of newlines it contains to the console (stdout),

  var fs = require ('fs');

  var file =  process.argv[2];


  fs.readFile(file, function (err, data){

    if (err) throw err;
    var result = data.toString().split('\n');
    console.log(result.length - 1);

  });
})();