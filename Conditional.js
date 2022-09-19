//Get user prompt for legal age to drive  
let num = prompt('Enter your age','16')
if (num >= 18) {
console.log(`${num} You are old enough to drive.`)
} else {
  console.log(`${num} You have 2 years left until you can drive`)
}
//Compare the values of myAge and yourAge using if … else
let myAge = prompt('Enter your age','')
let yourAge = prompt('Enter your age','')
if (myAge > yourAge) {
    console.log('I am older than you')
  } else if (myAge < yourAge) {
    console.log('You are older than me')
  }
//If a is greater than b return 'a is greater than b' else 'a is less than b'
  let a = 4
  let b = 3
  console.log((a>=b) ? 'a is greater than b' :'a is less than b')
//Check if a number is even or not using JavaScript
  let number = prompt('Enter number','')
  if(number % 2 == 0) {
    console.log('The number is even')
  } else {
    console.log('The number is odd')
  }