const Account = require('../lib/account');

describe('Account Tests', () => {
  beforeEach(() => {
    this.account = new Account();
    this.test_balance = this.account.balance;
  });

  describe('Deposit', () => {
    it('allows a deposit', () => {
      this.test_balance += 5;
      this.account.deposit(5);

      expect(this.account.balance).toEqual(this.test_balance);
    });
  });

  describe('Withdraw', () => {
    it('allows a withdrawal', () => {
      this.test_balance -= 5;
      this.account.withdraw(5);

      expect(this.account.balance).toEqual(this.test_balance);
    });
  });

  describe('Datestamp', () => {
    beforeEach(() => {
      this.default_formatted_date = '01/01/1970'
    })

    afterEach(() => {
      jest.spyOn(global.Date, 'now').mockRestore();
    })

    it('exists on a deposit', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);

      this.account.deposit(5);
      expect(this.account.deposit_log).toContain(this.default_formatted_date)
    });

    it('exists on a withdrawal', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);

      this.account.withdraw(5);
      expect(this.account.withdrawal_log).toContain(this.default_formatted_date)
    })
  });
});
