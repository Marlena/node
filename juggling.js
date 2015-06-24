(function(){
  'use strict';

  var ConcatStream = require('concat-stream');
  var http = require('http');
  var j = 0;
  var result = [];
  var urls = [process.argv[2].toString(), process.argv[3].toString(), process.argv[4].toString()];
  var waiting = 0;

  urls.forEach(function(url){
     waiting++;

      http.get(url, function(response){
        response.setEncoding('utf8');

        response.pipe(ConcatStream(function(data){
          waiting--;
          result.push(data.toString());
          complete();
        }))
      });

  });

  function complete(){
    var i;
    if (!waiting){
      for (i = 0; i < result.length; i++){
        console.log(result[i]);
      }

    }
  }


})();
