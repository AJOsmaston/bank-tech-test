class AccountLog {
  constructor() {
    this.deposit_log = []
    this.withdrawal_log = []
  }

  make_deposit() {
    this.deposit_log.push(
      this.formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
  }

  make_withdrawal() {
    this.withdrawal_log.push(
      this.formattedDate(
        new Date(
          Date.now(),
        ),
      ),
    );
  }

  formattedDate(fulldate) {
    const day = String(fulldate.getDate()).padStart(2, '0');
    const month = String(fulldate.getMonth() + 1).padStart(2, '0');
    const year = fulldate.getFullYear();
    return `${day}/${month}/${year}`;
  }

}

module.exports = AccountLog;