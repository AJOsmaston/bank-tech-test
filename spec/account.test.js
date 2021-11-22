const Account = require('../lib/account');
const AccountLog = require('../lib/account_log')

jest.mock('../lib/account_log')

describe('Account', () => {
  beforeEach(() => {
    this.mock_account_log = new AccountLog
    this.account = new Account(this.mock_account_log);
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

  xdescribe('Example Statement', () => {
    it('produces a formatted statement', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(1673308800000);
      this.account.deposit(1000)
      jest.spyOn(global.Date, 'now').mockReturnValue(1673568000000);
      this.account.deposit(200)
      jest.spyOn(global.Date, 'now').mockReturnValue(1673654400000);
      this.account.withdraw(500)

      expect(this.account.statement()).toEqual(
        "date || credit || debit || balance",
        "14/01/2023 || || 500.00 || 2500.00",
        "13/01/2023 || 2000.00 || || 3000.00",
        "10/01/2023 || 1000.00 || || 1000.00"
      )
    })
  })
});
