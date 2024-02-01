const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// nums.reverse()
// console.log(nums);

const rev_nums = [];

for(let num of nums){
  // console.log(num);
  rev_nums.unshift(num);
  
}
// console.log(rev_nums);

for(let i = 0; i < nums.length; i++){
  rev_nums.unshift(nums)
}
console.log(rev_nums);