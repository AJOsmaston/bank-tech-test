const AccountLog = require('../lib/account_log')

describe('Account Log', () => {
  describe('Date Stamp', () => {
    beforeEach(() => {
      this.account_log = new AccountLog
      this.default_formatted_date = '01/01/1970';
    })

    afterEach(() => {
      jest.spyOn(global.Date, 'now').mockRestore();
    })

    it('exists on a deposit', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);

      this.account_log.make_deposit();
      expect(this.account_log.deposit_log).toContain(this.default_formatted_date);
    });

    it('exists on a withdrawal', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);

      this.account_log.make_withdrawal();
      expect(this.account_log.withdrawal_log).toContain(this.default_formatted_date);
    });
  });
});