(function(){
  'use strict';

  var ConcatStream = require('concat-stream');
  var count = 0;
  var http = require('http');
  var results = [];
  var url;
  var urls = [process.argv[2].toString(), process.argv[3].toString(), process.argv[4].toString()];

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
    results.forEach(function(result){
      console.log(result);
    })
  }


})();
