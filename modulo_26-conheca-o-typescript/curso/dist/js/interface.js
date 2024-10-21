"use strict";
class Account {
    constructor(accountNumber) {
        this.balance = 0;
        this.accountNumber = accountNumber;
    }
}
class SalaryAccount extends Account {
    deposit(value) {
        this.balance += value;
    }
}
class CheckingAccount extends Account {
    constructor() {
        super(...arguments);
        this.taxForTransfer = 0.02;
        this.limit = 10000;
        this.bankNumber = 987;
    }
    transferring(value, destiny) {
        destiny.balance += value * (1 - this.taxForTransfer);
        return true;
    }
}
