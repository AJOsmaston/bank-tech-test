class Bank {
  constructor() {
    this.balance = 0;
    this.deposit_log = []
  }

  deposit(amount) {
    this.balance += amount;
    this.deposit_log.push(
      this.#formattedDate(
        new Date(
          Date.now()
          )
        )
      );
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  #formattedDate(fulldate) {
    let day = String(fulldate.getDate()).padStart(2, '0');
    let month = String(fulldate.getMonth() + 1).padStart(2, '0');
    let year = fulldate.getFullYear()
    return `${day}/${month}/${year}`
  }
}

module.exports = Bank;
