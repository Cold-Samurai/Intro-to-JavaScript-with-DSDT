//Use the typeof operator to check different data types.
let firstName = 'Walter' 
let lastName = 'White'
let country = 'USA'
let city = 'Albuquerque'
let age = 52
let isMarried = 'true'

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried )

//Check if type of '10' is equal to 10
let str = '10'
let num = 10

console.log(typeof '10' == 10)

//Check if parseInt('9.8') is equal to 10
let num1 = parseFloat('9.8')
let num2 = 10

console.log(typeof(num1) === typeof(num2));

//Boolean value is either true or false.
let isSingle = true   
let isSunny = true
let truValue = 5 > 2 //true
let falseValue = 8 < 5 //false
let isRich = false
let isAwake = false

//Figure out the result of the following comparison expressions
 4 > 3   //true
 4 >= 3  //true
 4 < 3   //false
 4 <= 3  // false 
 4 == 4  //true
4 === 4     //true
4 != 4      //false
4 !== 4     //false
4 != '4'    //  true
4 == '4'       //true
4 === '4'      //false

console.log( 4 > 3)
console.log( 4 >= 3)
console.log(4 < 3 )
console.log( 4 <= 3 )
console.log(4 == 4)
console.log(4 === 4 )
console.log(4 != 4  )
console.log(4 !== 4  )
console.log(4 != '4' )
console.log(4 == '4')
console.log(4 === '4' )
//Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !== 'jargon'.length) 

//Figure out the result of the following expressions
4 > 3 && 10 < 12    // true and true
4 > 3 && 10 > 12    // true and false
4 > 3 || 10 < 12    // true || true
4 > 3 || 10 > 12    // true || false
!(4 > 3)    // false
!(4 < 3)    // true
!(false)    //true
!(4 > 3 && 10 < 12) // false
!(4 > 3 && 10 > 12) // true
!(4 === '4')    // false

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//There is no 'on' in both dragon and python
let text = "jargon"
let txt = "python"
let result = text.includes("on")

//Use the Date object to do the following activities
const now = new Date()
console.log(now.getFullYear()) //What is the year today?

const mnh = new Date()
console.log(mnh.getMonth()) //What is the month today as a number?

const dte = new Date()
console.log(dte.getDate()) //What is the date today?

const today = new Date()
console.log(today.getDay()) //What is the day today as a number?

const hrs = new Date()
console.log(hrs.getHours())  //What is the hours now?

const min = new Date()
console.log(min.getMinutes())  //What is the minutes now?

const allSeconds = Date.now() // Numbers of seconds elapsed from January 1, 1970 to now.
console.log(allSeconds)