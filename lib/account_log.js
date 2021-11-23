const Deposit = require("./deposit");
const Withdraw = require("./withdraw");

class AccountLog {
  constructor(withdraw_log = new Withdraw(), deposit_log = new Deposit()) {
    this.withdraw_log = withdraw_log;
    this.deposit_log = deposit_log;
    this.statement_array = [
      'date || credit || debit || balance',
    ];
  }

  statement() {
    return this.statement_array;
  }

  deposit(amount, balance) {
    this.deposit_log.log.push(amount);
    this.deposit_log.date_deposit(
      this.formattedDate(new Date(Date.now()))
    );
    this.statement_array.splice(1, 0, this.deposit_log.format_deposit(balance));
    this.deposit_log.increase_deposit_count();
  }

  withdraw(amount, balance) {
    this.withdraw_log.log.push(amount);
    this.withdraw_log.date_withdraw(
      this.formattedDate(new Date(Date.now()))
    );
    this.withdraw_log.format_withdraw(balance);
    this.statement_array.splice(1, 0, this.withdraw_log.format_withdraw(balance));
    this.withdraw_log.increase_withdraw_count();
  }

  // balance() {
  //   const moneyIn = this.deposit_log.log.reduce(this.add, 0);
  //   const moneyOut = this.withdraw_log.log.reduce(this.add, 0);
  //   return moneyIn - moneyOut;
  // }

  // add(accumulator, a) {
  //   return accumulator + a;
  // }

  formattedDate(fulldate) {
    const day = String(fulldate.getDate()).padStart(2, '0');
    const month = String(fulldate.getMonth() + 1).padStart(2, '0');
    const year = fulldate.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

module.exports = AccountLog;
