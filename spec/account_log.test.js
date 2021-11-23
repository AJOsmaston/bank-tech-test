const AccountLog = require('../lib/account_log');
const WithdrawLog = require('../lib/withdraw_log');

jest.mock('../lib/withdraw_log');
const DepositLog = require('../lib/deposit_log');

jest.mock('../lib/deposit_log');
const DateFormatter = require('../lib/date_formatter');

jest.mock('../lib/date_formatter');

describe('Account Log', () => {
  beforeEach(() => {
    this.withdraw_mock = new WithdrawLog();
    this.deposit_mock = new DepositLog();
    this.date_formatter_mock = new DateFormatter();
    this.account_log = new AccountLog(
      this.withdraw_mock,
      this.deposit_mock,
    );
    this.formatted_deposit_row = '10/01/2023 || 500.00 || || 1000.00';
    this.formatted_withdraw_row = '10/01/2023 || || 500.00 || 1000.00';
  });

  afterEach(() => {
    jest.spyOn(global.Date, 'now').mockRestore();
  });

  describe('#deposit', () => {
    it('updates the statement', () => {
      jest.spyOn(this.deposit_mock, 'format_deposit').mockReturnValue(this.formatted_deposit_row);

      this.account_log.deposit();
      expect(this.account_log.statement()).toContain(
        '10/01/2023 || 500.00 || || 1000.00',
      );
    });
  });

  describe('#withdraw', () => {
    it('updates the statement', () => {
      jest.spyOn(
        this.withdraw_mock, 'format_withdraw',
      ).mockReturnValue(
        this.formatted_withdraw_row,
      );

      this.account_log.withdraw();
      expect(this.account_log.statement()).toContain(
        '10/01/2023 || || 500.00 || 1000.00',
      );
    });
  });
});
