"use strict";
class Person {
    // In this case we have a parameter that is optional. So, it must be passed after the obligatory parameters.
    constructor(name, income) {
        this.name = name;
    }
    sayHi() {
        return `${this.name} says hi!`;
    }
}
class BankAccount {
    constructor(accountNumber) {
        // With "private" key, the variable can only be reached in the class that it were set.
        this.balance = 0; // Can only be changed in BankAccount class.
        // With "protected" key other inheriting classes can access this variable
        this.saveBalance = 0; // Other classes that extends this class can access this variable
        this.accountNumber = accountNumber;
    }
    // A "static" method is a method that will be attached to a class and not in an instance of the class. So, only calling the method by the class name we can access this variable
    static bankNumber() {
        return 987;
    }
    getBalance() {
        return this.balance;
    }
    getSaveBalance() {
        return this.saveBalance;
    }
    deposit(value) {
        this.balance += value;
    }
}
class BankAccountLegalPerson extends BankAccount {
    deposit(value) {
        // Because this variable is "private" can be accessed in this class. Uncomment to see the error.
        // this.balance += value;
        // As this variable is "protected", we can access here and modify it
        this.saveBalance += value * 0.9;
    }
}
const fabioAccount = new BankAccountLegalPerson(1234);
console.log("Account: ", fabioAccount);
console.log("Account number: ", fabioAccount.accountNumber);
console.log("Balance: ", fabioAccount.getBalance());
console.log("Save balance: ", fabioAccount.getSaveBalance());
fabioAccount.deposit(100);
console.log("Save balance: ", fabioAccount.getSaveBalance());
console.log("Bank number: ", BankAccount.bankNumber());
