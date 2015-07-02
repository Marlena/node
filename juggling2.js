(function(){

  var ConcatStream = require('concat-stream');
  var http = require('http');

  var count = 0;
  var data = [];
  var i;


  for (i = 2; i < process.argv.length; i++){
    data.push({url: process.argv[i].toString()});
  }

  data.forEach(function(datum){
    http.get(datum.url, function(response){
      response.pipe(ConcatStream(function(res_text){
        datum.text = res_text.toString();
        count ++;

        if (count == 3){
          printText();
        }
      }));
    });
  });

  function printText(){
    data.forEach(function(datum){
      console.log(datum.text);
    });
  }


})();