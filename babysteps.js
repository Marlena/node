(function(){
  var result = 0;
  var i = 2;

  if (process.argv[i] != undefined){
    while (process.argv[i] != undefined){
      result += +process.argv[i];
      i++;
      if (process.argv[i] == undefined){
        console.log(result);
        break;
      }
    }
  }
})();





