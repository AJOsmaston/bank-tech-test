class AccountLog {
  constructor() {
    this.deposit_log = []
    this.deposit_date_log = []
    this.withdrawal_log = []
    this.withdrawal_date_log = []
    this.acount_count = 0
  }

  deposit(amount) {
    this.deposit_log.push(amount)
  }

  withdraw(amount) {
    this.withdrawal_log.push(amount)
  }

  date_deposit() {
    this.deposit_date_log.push(
      this.formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
    this.action_count += 1
  }

  date_withdraw() {
    this.withdrawal_date_log.push(
      this.formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
    this.action_count += 1
  }

  produce_statement() {

  }

  formattedDate(fulldate) {
    const day = String(fulldate.getDate()).padStart(2, '0');
    const month = String(fulldate.getMonth() + 1).padStart(2, '0');
    const year = fulldate.getFullYear();
    return `${day}/${month}/${year}`;
  }

}

module.exports = AccountLog;