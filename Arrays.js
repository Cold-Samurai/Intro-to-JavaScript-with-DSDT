//Declare empty array
let arr = new Array()
console.log(arr)

//Declare an array with more than 5 number of elements
const dogs = ['husky', 'corgi', 'pitbull', 'rottweiler', 'doberman', 'spitz', 'collie', 'malamute']
//find the length
console.log(dogs.length)
//
let firstDog = dogs[0] //print first dog element
console.log(firstDog)

let middleDog = dogs[3] //print middle dog element
console.log(middleDog)

let lastDog = dogs[7] //print last dog element
console.log(lastDog)

//Declare an array called mixedDatatypes
const mixedDataTypes = ['string', 'integer', 'float', 'boolean', 'character', 'date', 'time']
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(itCompanies) 

console.log(itCompanies.length) //print number companies

let firstCompany = itCompanies[0]
console.log(firstCompany)       //print first company element

let middleCompany = itCompanies[3]
console.log(middleCompany)      //print middle company element

let lastCompany = itCompanies[6]
console.log(lastCompany)    //print last company element

console.log(itCompanies)    //print array

const upper = itCompanies.map(element => {  //uppercase each company
    return element.toUpperCase();
  });
console.log(upper)

console.log(itCompanies.toString()) //convert array to string

console.log(itCompanies.splice(0,3)) //removes companies with more than one 'o'

let index = itCompanies.indexOf('Google')  //confirm if the company exists in the array or not

if(index === -1){
   console.log('This company does not exist in the array')  
} else {
    console.log('This company does exist in the array')
}

console.log(itCompanies.sort()); //sort itCompanies array

console.log(itCompanies.reverse()); //reverse order of array

console.log(itCompanies.slice(0,3))   //Slice out the first 3 companies from the array

console.log(itCompanies.slice(3,6))   //Slice out the last 3 companies from the array

console.log(itCompanies.slice(2,5))   //Slice out the middle IT company or companies from the array

console.log(itCompanies.shift())   //Remove the first IT company from the array

console.log(itCompanies.splice(2,5))   //Remove the middle IT company or companies from the array

console.log(itCompanies.pop())   //Remove the last IT company from the array

itCompanies.splice()
console.log(itCompanies)     //Remove all IT companies
