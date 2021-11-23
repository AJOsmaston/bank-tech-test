const Deposit = require('./deposit_log');
const Withdraw = require('./withdraw_log');

class AccountLog {
  constructor(
    withdrawLog = new Withdraw(),
    depositLog = new Deposit(),
  ) {
    this.withdraw_log = withdrawLog;
    this.deposit_log = depositLog;
    this.statement_array = [
      'date || credit || debit || balance',
    ];
  }

  statement() {
    return this.statement_array;
  }

  deposit(amount, balance) {
    this.deposit_log.add(amount);
    this.deposit_log.date_deposit(this.getFormattedDate());
    this.statement_array
      .splice(1, 0, this.deposit_log.format_deposit(balance));
    this.deposit_log.increase_deposit_count();
  }

  withdraw(amount, balance) {
    this.withdraw_log.add(amount);
    this.withdraw_log.date_withdraw(this.getFormattedDate());
    this.statement_array
      .splice(1, 0, this.withdraw_log.format_withdraw(balance));
    this.withdraw_log.increase_withdraw_count();
  }

  getFormattedDate() {
    return this.formattedDate(new Date(Date.now()));
  }

  formattedDate(fulldate) {
    this.day = String(fulldate.getDate()).padStart(2, '0');
    this.month = String(fulldate.getMonth() + 1).padStart(2, '0');
    this.year = fulldate.getFullYear();
    return `${this.day}/${this.month}/${this.year}`;
  }
}

module.exports = AccountLog;
