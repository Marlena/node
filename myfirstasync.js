(function(){
  'use strict';
  //Write a program that uses a single asynchronous filesystem
  //operation to read a file and print the number of newlines it contains to the console (stdout),

  var filterFn = ('./modular1.js');
  var dir = process.argv[2];

  var filterStr =  process.argv[3];


  filterFn(dir, filterStr, function(err, list){


  });


  fs.readFile(file, function (err, data){

    if (err) throw err;
    var result = data.toString().split('\n');
    console.log(result.length - 1);

  });
})();
