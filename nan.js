const arr = [ 11, '33', 35, '55', 'price: 13']
let sum = 0;
for(i = 0; i < arr.length; i++){
  const currentNum = arr[i];
  const convertedNumber = parseInt(currentNum)
  if(!isNaN (convertedNumber)){
    sum = sum + convertedNumber;
   }
  
}
console.log(sum);