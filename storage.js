localStorage.setItem('firstName', 'Kenneth')

localStorage.setItem('lastName', 'Gadie')

localStorage.setItem('age', '34')

localStorage.setItem('country', 'USA')

localStorage.setItem('city','Mt. Clemens')

console.log(localStorage)

const student = {
    firstName: 'Logan',
    lastName: 'Scott',
    age: '28',
    skills: ['CompTiaNET+', 'SEC+', 'PENTest+'],
    country: 'USA',
    enrolled: 'JAVA101'
 }

 const skills = JSON.stringify(student, undefined, 3);

localStorage.setItem('student', skills)
console.log(localStorage)

