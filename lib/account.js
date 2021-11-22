class Account {
  constructor(accountlog) {
    this.balance = 0;
    this.accountlog = accountlog
  }

  deposit(amount) {
    this.balance += amount;
    this.accountlog.make_deposit
  }

  withdraw(amount) {
    this.balance -= amount;
    this.accountlog.make_withdrawal
  }
}

module.exports = Account;
