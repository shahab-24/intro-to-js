const nums = [25, 44, 35, 3, 69, 6, 37, 84, 5, 4];
// for(let i = 0; i < nums.length; i++){

//   if(i === 37){
//     continue;
//   }
//   console.log(i);
// }

// for(let i of nums){
//   if(i === 37){continue;}
//   console.log(i);
// }


for(let i of nums){
    if(i % 2 === 1){continue;}
    console.log(i);
  }
  