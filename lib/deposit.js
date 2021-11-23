class Deposit {
  constructor() {
    this.log = [];
    this.date_log = [];
    this.count = 0;
  }

  date_deposit(date) {
    this.date_log.push(date);
  }

  increase_deposit_count() {
    this.count += 1;
  }

  format_deposit(balance) {
    return(
      `${
        this.date_log[this.count]
      } || ${
        this.log[this.count].toFixed(2)
      } || || ${
        balance.toFixed(2)
      }`
    );
  }

}

module.exports = Deposit;