const nums = [25, 44, 35, 3, 69, 6, 37, 84, 5, 4]
let sumOfOdd = 0;
let sumOfEven = 0;
for(let i = 0; i < nums.length; i++){
  const x = nums[i];
  if(x % 2 === 0){
    sumOfEven += x;
  }
  else{
    sumOfOdd += x;
  }

}

console.log(sumOfEven);