//create an empty set
const waves = new Set
console.log(waves)
//Create a set containing 0 to 10 using loop
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
setOfNumbers = new Set(numbers)
for (const numbers of setOfNumbers)
{ console.log(numbers)
}
//Remove an element from a set
const countries = ['Finland', 'Sweden', 'Norway']
setOfCountries = new Set(countries)
for (const countries of setOfCountries)
{  console.log(countries.delete('Sweden')) 
console.log(countries.size)}
//Clear a set
const companies = ['Google', 'Nintendo', 'Sony', 'Sega', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
companies.clear()
console.log(companies)
  
}
//Create a set of 5 string elements from array
const cars = [
    'Charger',
    'Conquest',
    'Mustang',
    'Conquest',
    'Viper',
    'Camaro',
    'Charger',
    'Mustang',
  ]
  
  const setOfCars = new Set(cars)
  console.log(setOfCars)
//Create a map of countries and number of characters of a country
  countries = [
    ['Michigan', 'Detroit'],
    ['Colorado', 'Denver'],
    ['South Dakota', 'Rapid City'],
    ['North Dakota', 'Minot']
  ]
  const map = new Map(countries)
  console.log(map)
  console.log(map.size)