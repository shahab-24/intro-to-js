/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let tahmid = 60;

if(tahmid > 90 && tahmid < 100){
  console.log('he wil get Grade A');
}
else if(tahmid > 80 && tahmid < 89){
  console.log('he wil get Grade B');
}
else if(tahmid >= 70 && tahmid < 79){
  console.log('he wil get Grade C');
}
else if(tahmid >= 60 && tahmid < 69){
  console.log('he wil get Grade D');
}
else{
  console.log('he wil get Grade F');
}