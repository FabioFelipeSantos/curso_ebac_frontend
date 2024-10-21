class Account {
	accountNumber: number;
	balance: number = 0;

	constructor(accountNumber: number) {
		this.accountNumber = accountNumber;
	}
}

class SalaryAccount extends Account {
	deposit(value: number): void {
		this.balance += value;
	}
}

interface ITransferring {
	transferring: (value: number, destiny: Account) => boolean;
	taxForTransfer: number;
}

interface ITransferBank {
	bankNumber: number;
}

interface ITransferLimit extends ITransferBank {
	limit: number;
}

class CheckingAccount extends Account implements ITransferring, ITransferLimit {
	taxForTransfer: number = 0.02;
	limit: number = 10000;
	bankNumber: number = 987;
	transferring(value: number, destiny: Account) {
		destiny.balance += value * (1 - this.taxForTransfer);
		return true;
	}
}
