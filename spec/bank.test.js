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
    it('exists on a deposit', () => {

    });
  });
});
