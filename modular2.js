(function(){
  var filterLs = require('./modular1.js');

  var directoryName = process.argv[2];
  var fileExtension = process.argv[3]; //md

  filterLs(directoryName, fileExtension, function(err, files){
    if (err){
      throw err;
    }

    files.forEach(function(file){
      console.log(file);
    });

  });


})();



