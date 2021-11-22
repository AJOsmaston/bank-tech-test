class Account {
  constructor() {
    this.balance = 0;
    this.deposit_log = [];
    this.withdrawal_log = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.deposit_log.push(
      this.#formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
  }

  withdraw(amount) {
    this.balance -= amount;
    this.withdrawal_log.push(
      this.#formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
  }

  #formattedDate(fulldate) {
    const day = String(fulldate.getDate()).padStart(2, '0');
    const month = String(fulldate.getMonth() + 1).padStart(2, '0');
    const year = fulldate.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

module.exports = Account;
