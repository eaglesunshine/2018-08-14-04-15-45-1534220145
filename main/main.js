// Write your cade below:

function RndNum(n){
    var rnd="";
    for(var i=0;i<n;i++)
        rnd+=Math.floor(Math.random()*10);
    return rnd;
}


  var a,b;
  a=RndNum(10);
  b=RndNum(3);
  console.log(a%b);




