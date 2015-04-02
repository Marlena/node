var mymodule = require('./modular1');

var fs = require('fs');

var directoryName = process.argv[2];
var fileExtension = process.argv[3]; //md


//output from the module will be printed out from here
var files = ['CHANGELOG.md', 'LICENCE.md', 'README.md'];

//error is printed out in the callback
mymodule(directoryName, fileExtension, function(err){
  {
    //print out the error
    console.log("inside the callback");

  }
});