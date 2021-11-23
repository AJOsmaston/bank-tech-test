const Deposit = require('./deposit_log');
const Withdraw = require('./withdraw_log');
const DateFormatter = require('./date_formatter');

class AccountLog {
  constructor(
    withdrawLog = new Withdraw(),
    depositLog = new Deposit(),
    dateFormatter = new DateFormatter(),
  ) {
    this.withdraw_log = withdrawLog;
    this.deposit_log = depositLog;
    this.date_formatter = dateFormatter;
    this.statement_array = [
      'date || credit || debit || balance',
    ];
  }

  statement() {
    return this.statement_array;
  }

  deposit(amount, balance) {
    this.deposit_log.add(amount);
    this.deposit_log.date_deposit(this.date_formatter.getFormattedDate());
    this.statement_array
      .splice(1, 0, this.deposit_log.format_deposit(balance));
    this.deposit_log.increase_deposit_count();
  }

  withdraw(amount, balance) {
    this.withdraw_log.add(amount);
    this.withdraw_log.date_withdraw(this.date_formatter.getFormattedDate());
    this.statement_array
      .splice(1, 0, this.withdraw_log.format_withdraw(balance));
    this.withdraw_log.increase_withdraw_count();
  }
}

module.exports = AccountLog;
