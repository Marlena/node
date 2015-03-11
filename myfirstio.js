(function(){
  'use strict';

  //Write a program that uses a single synchronous filesystem operation to read a file
//and print the number of newlines it contains to the console (stdout)

  var fs = require ('fs');

  var file =  process.argv[2];

  var fileContents = fs.readFileSync(file).toString().split('\n');

  console.log(fileContents.length-1);

})();

