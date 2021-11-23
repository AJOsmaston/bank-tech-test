class Withdraw {
  constructor() {
    this.log = [];
    this.date_log = [];
    this.count = 0;
  }

  date_withdraw(date) {
    this.date_log.push(date);
  }

  increase_withdraw_count() {
    this.count += 1;
  }

  format_withdraw(balance) {
    return(
      `${
        this.date_log[this.count]
      } || || ${
        this.log[this.count].toFixed(2)
      } || ${
        balance.toFixed(2)
      }`
    );
  }

}

module.exports = Withdraw;