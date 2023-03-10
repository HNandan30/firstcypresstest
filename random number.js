//Random number generator
let min = 20;
let max = 50;
let randomNumber = Math.random();
console.log('first ranom number',randomNumber);
randomNumber = Math.floor(Math.random()*(max - min + 1)) + min;
console.log('second ranom number',randomNumber);


/*function compoundInterest(p, r, n){
    return  p * (1 + r/100)**n 
  }
  console.log(compoundInterest(5000, 7, 2));*/
  // input from the user
/*const min = parseInt(prompt("Enter a min value: "));
const max = parseInt(prompt("Enter a max value: "));

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value between ${min} and ${max} is ${a}`); has context menu*/
