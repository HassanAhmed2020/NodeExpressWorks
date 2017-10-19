
var sum=0;
  process.argv.shift();
  process.argv.shift();
  
  for (var i=0; i < process.argv.length; i++)
  {
      sum += Number(process.argv[i]);
  }
  
 console.log(sum);