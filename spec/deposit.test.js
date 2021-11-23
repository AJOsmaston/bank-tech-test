const Deposit = require('../lib/deposit')

describe('Deposit', () => {
  beforeEach(() => {
    this.deposit = new Deposit();
    this.default_formatted_date = '01/01/1970';
  })

  describe('#date_deposit', () => {
    it('date exists on a deposit', () => {
      this.deposit.date_deposit('01/01/1970');

      expect(this.deposit.date_log)
      .toContain(
        this.default_formatted_date
      );
    });
  });

  describe('#increase_deposit_count', () => {
    it('increases count on call', () => {
      let test_count = this.deposit.count;
      test_count += 1;
      this.deposit.increase_deposit_count();

      expect(this.deposit.count).toEqual(test_count)
    });
  });

  describe('#format_deposit', () => {
    it('correctly formats a deposit', () => {
      this.deposit.add(1000)
      this.deposit.date_deposit(this.default_formatted_date);
      expect(this.deposit.format_deposit(1000))
        .toEqual(
          "01/01/1970 || 1000.00 || || 1000.00"
        )
    })
  })
});
