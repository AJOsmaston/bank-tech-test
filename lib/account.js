const AccountLog = require('./account_log');

class Account {
  constructor(accountlog = new AccountLog()) {
    this.balance = 0;
    this.accountlog = accountlog;
  }

  deposit(amount) {
    this.balance += amount;
    this.accountlog.deposit(amount, this.balance);
    return this.balance;
  }

  withdraw(amount) {
    this.balance -= amount;
    this.accountlog.withdraw(amount, this.balance);
    return this.balance;
  }

  statement() {
    return this.accountlog.statement();
  }
}

module.exports = Account;
