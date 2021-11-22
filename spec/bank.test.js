const Bank = require('../lib/bank');

describe('Bank Tests', () => {
  beforeEach(() => {
    this.bank = new Bank();
    this.test_balance = this.bank.balance;
  });

  describe('Deposit', () => {
    it('allows a deposit', () => {
      this.test_balance += 5;
      this.bank.deposit(5);

      expect(this.bank.balance).toEqual(this.test_balance);
    });
  });

  describe('Withdraw', () => {
    it('allows a withdrawal', () => {
      this.test_balance -= 5;
      this.bank.withdraw(5);

      expect(this.bank.balance).toEqual(this.test_balance);
    });
  });

  describe('Datestamp', () => {
    afterEach(() => {
      jest.spyOn(global.Date, 'now').mockRestore();
    })

    it('exists on a deposit', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);
      let default_formatted_date = '01/01/1970'

      this.bank.deposit(5);
      expect(this.bank.deposit_log).toContain(default_formatted_date)
    });

    it('exists on a withdrawal', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);
      let default_formatted_date = '01/01/1970'

      this.bank.withdraw(5);
      expect(this.bank.withdrawal_log).toContain(default_formatted_date)
    })
  });
});
