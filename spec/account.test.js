const Account = require('../lib/account');
const AccountLog = require('../lib/account_log');

jest.mock('../lib/account_log');

describe('Account', () => {
  beforeEach(() => {
    this.mock_account_log = new AccountLog();
    this.account = new Account(this.mock_account_log);
    this.test_balance = this.account.balance;
  });

  describe('#deposit', () => {
    it('allows a deposit', () => {
      this.test_balance += 5;
      this.account.deposit(5);

      expect(this.account.balance).toEqual(this.test_balance);
    });
  });

  describe('#withdraw', () => {
    it('allows a withdrawal', () => {
      this.test_balance -= 5;
      this.account.withdraw(5);

      expect(this.account.balance).toEqual(this.test_balance);
    });
  });

  describe('#statement', () => {
    it('returns a statement', () => {
      const example_output = 'example';
      jest.spyOn(this.mock_account_log, 'statement')
        .mockReturnValue(['example']);

      expect(this.account.statement()).toContain(example_output);
    });
  });
});
