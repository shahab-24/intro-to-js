/**string equalize by toLowerCase or upperCase */

let country = 'Bangladesh';
let state = 'bangladesh';
if(country.toLowerCase === state.toLowerCase){
  console.log('(hello dear');
}
else{
  console.log('not match string');
}

/* space removing
by trim*/

let desh = ' Bangladesh';
let Desh = 'bangladesh ';
if(country.trim === state.trim){
  console.log('Assalamu alaikum');
}
else{
  console.log('not match string');
}

/**
 * split
 */
let sentence = 'i want to be a programmer';
console.log(sentence.split(''))

/**
 * join
 */
const realfriend = ['ramij', 'soyon', 'mortuza']
console.log(realfriend.join('+'))

/**
 * concate
 */

let first = 'shahab';
let last = 'uddin';
let fullName = first + ' ' + last;
// console.log(fullName);

let nam1 = 'shahab';
let nam2 = 'uddin';
let fullName2 = nam1.concat(' ').concat(nam2)
// console.log(fullName2);
console.log(nam2.includes('t'))


//reverse//

let part = 'i am learning web dev';

let reverse = ' '

for(const letter of part)
{
  reverse = letter + reverse ;
}
console.log(reverse);