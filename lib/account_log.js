class AccountLog {
  constructor() {
    this.deposit_log = []
    this.deposit_date_log = []
    this.deposit_count = 0
    this.withdrawal_log = []
    this.withdrawal_date_log = []
    this.withdrawal_count = 0
    this.statement = [
      "date || credit || debit "
    ]
  }

  deposit(amount) {
    this.deposit_log.push(amount);
    this.date_deposit();
    this.format_deposit();
    this.increase_deposit_count();
  }

  date_deposit() {
    this.deposit_date_log.push(
      this.formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
  }

  increase_deposit_count() {
    this.deposit_count += 1
  }

  withdraw(amount) {
    this.withdrawal_log.push(amount);
    this.date_withdraw();
    this.format_withdraw();
    this.increase_withdrawal_count();
  }

  date_withdraw() {
    this.withdrawal_date_log.push(
      this.formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
  }

  increase_withdrawal_count() {
    this.withdrawal_count += 1
  }

  format_deposit() {
    this.statement.splice(1, 0, `${this.deposit_date_log[this.deposit_count]} || ${this.deposit_log[this.deposit_count].toFixed(2)} || `)
  }

  format_withdraw() {
    this.statement.splice(1, 0, `${this.withdrawal_date_log[this.withdrawal_count]} || || ${this.withdrawal_log[this.withdrawal_count].toFixed(2)} `)
  }

  formattedDate(fulldate) {
    const day = String(fulldate.getDate()).padStart(2, '0');
    const month = String(fulldate.getMonth() + 1).padStart(2, '0');
    const year = fulldate.getFullYear();
    return `${day}/${month}/${year}`;
  }

}

module.exports = AccountLog;