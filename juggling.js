(function(){
  'use strict';

  var ConcatStream = require('concat-stream');
  var bl = require('bl');
  var http = require('http');
  var results = [];
  var urls = [process.argv[2].toString(), process.argv[3].toString(), process.argv[4].toString()];
  var count = 0;
  var i, url;


  for(url in urls){
    httpGet(url);
  }

  function httpGet(url){
    http.get(urls[url], function(response){
      response.pipe(ConcatStream(function(data){
        results[url] = data.toString();
        count ++;

        if (count == 3){
          printResults()
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
