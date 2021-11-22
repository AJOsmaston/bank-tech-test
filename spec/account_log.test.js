const AccountLog = require('../lib/account_log')

describe('Account Log', () => {
  describe('Date Logs', () => {
    beforeEach(() => {
      this.account_log = new AccountLog
      this.default_formatted_date = '01/01/1970';
    })

    afterEach(() => {
      jest.spyOn(global.Date, 'now').mockRestore();
    })

    it('exists on a deposit', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);
      this.account_log.date_deposit();

      expect(this.account_log.deposit_date_log).toContain(this.default_formatted_date);
    });

    it('exists on a withdrawal', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);
      this.account_log.date_withdraw();

      expect(this.account_log.withdrawal_date_log).toContain(this.default_formatted_date);
    });
  });

  describe('Amount Logs', () => {
    it('exists on a deposit', () => {
      this.account_log.deposit(10)

      expect(this.account_log.deposit_log).toContain(10)
    });

    it('exists on a withdrawal', () => {
      this.account_log.withdraw(10)

      expect(this.account_log.withdrawal_log).toContain(10)
    });
  });
});