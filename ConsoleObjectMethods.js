//Display the countries array as a table
const countries = [
    ['United States', 'Detroit'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)
//Display the countries object as a table
  const countries = {
    UnitedStates: 'Detroit',
    Sweden: 'Stockholm',
    Norway: 'Oslo',
  }
  console.table(countries)
  //Use console.group() to group logs
  const names = ['Kevon', 'Brook', 'David', 'John']
  const countries = [
    ['United States', 'Detroit'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  const user = {
    name: 'Kevon',
    title: 'Programmer',
    country: 'United States',
    city: 'Detroit',
    age: 250
  }
  const users = [
    {
      name: 'Kevon',
      title: 'Programmer',
      country: 'United States',
      city: 'Detroit',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  
  console.group('Names')
  console.log(names)
  console.groupEnd()
  
  console.group('Countries')
  console.log(countries)
  console.groupEnd()
  
  console.group('Users')
  console.log(user)
  console.log(users)
  console.groupEnd()