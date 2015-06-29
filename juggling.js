(function(){
  'use strict';

  var ConcatStream = require('concat-stream');
  var bl = require('bl');
  var http = require('http');
  var results = ['one', 'two', 'three'];
  var urls = [process.argv[2].toString(), process.argv[3].toString(), process.argv[4].toString()];
  var count = 0;
  var i;

  for (i = 0; i < urls.length; i++){
    httpGet(i);
  }

  function httpGet(iterator){
    http.get(urls[iterator], function(response){
      response.pipe(ConcatStream(function(data){
        results[iterator] = data.toString();
        count ++;

        if (count == 3){
          printResults();
        }

      }))
    })
  }

  function printResults(){
    for (i = 0; i < results.length; i++){
      console.log(results[i]);
    }
  }


})();
