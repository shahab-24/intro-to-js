var num = [1, 2, 3, 4, 5, 6]

for(var i= 0; i < num.length; i++){
  if(num[i] == 5)
  {console.log('found-5');
    break;
  }
  
  console.log(num[i]);
}