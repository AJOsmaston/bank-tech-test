class Account {
  constructor(accountlog) {
    this.balance = 0;
    this.accountlog = accountlog
  }

  deposit(amount) {
    this.balance += amount;
    this.accountlog.date_deposit();
    this.accountlog.deposit(amount);
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
    this.accountlog.date_withdraw();
    this.accountlog.withdraw(amount);
    return this.balance;
  }

  statement() {
    this.accountlog.produce_statement
  }
}

module.exports = Account;
