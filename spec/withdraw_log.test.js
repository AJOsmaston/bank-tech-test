const WithdrawLog = require('../lib/withdraw_log');

describe('Withdraw', () => {
  beforeEach(() => {
    this.withdraw = new WithdrawLog();
    this.default_formatted_date = '01/01/1970';
  });

  describe('#date_withdraw', () => {
    it('date exists on a withdrawal', () => {
      this.withdraw.date_withdraw('01/01/1970');

      expect(this.withdraw.date_log)
        .toContain(
          this.default_formatted_date,
        );
    });
  });

  describe('#increase_withdraw_count', () => {
    it('increases count on call', () => {
      let test_count = this.withdraw.count;
      test_count += 1;
      this.withdraw.increase_withdraw_count();

      expect(this.withdraw.count).toEqual(test_count);
    });
  });

  describe('#format_withdraw', () => {
    it('correctly formats a withdrawal', () => {
      this.withdraw.add(1000);
      this.withdraw.date_withdraw(this.default_formatted_date);
      expect(this.withdraw.format_withdraw(1000))
        .toEqual(
          '01/01/1970 || || 1000.00 || 1000.00',
        );
    });
  });
});
