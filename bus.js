/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 10;
let stu = 10;
let senior = 55;
let fare = 800;

if(age < 10){console.log('free')}

else if(stu > 10 && stu < 60){
  let discount = fare * 50 / 100;
  let pay = fare - discount;
  console.log(pay);
}
else if(senior >= 60){
  let discount = fare * 15 / 100;
  let pay = fare - discount;
  console.log(pay);
}
else{
console.log(fare);
}