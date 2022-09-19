const personAccount = {
    firstName: 'Virgil',
    lastName: 'Hawkins',
    incomes: 'Earns 6000 a month for salary, 10000 dollar signing bonus, 2000 a month completion bonus',
    expenses: 'New equipment: $419 for monitors, $889 for computer, $35 mouse & keyboard',
   
   displaytotalIncome: function(){
    return this.incomes
   },
   displaytotalExpense: function(){
    return this.expenses
   },
   displayaccountInfo: function(){
    return this.firstName + " " + this.lastName
   },
   displayaddIncome: function(){
    return this.incomes
   },
    displayaddExpense: function(){
    return this.expenses
   },
    displayaccountBalance: function(){
    return this.incomes + " " + this.expenses
   },

}
console.log(personAccount.totalIncome);
console.log(personAccount.totalExpense);
console.log(personAccount.accountInfo);
console.log(personAccount.addIncome);
console.log(personAccount.addExpense);
console.log(personAccount.accountBalance);