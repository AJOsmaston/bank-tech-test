const AccountLog = require('../lib/account_log')
const Withdraw = require('../lib/withdraw')
jest.mock('../lib/withdraw')
const Deposit = require('../lib/deposit')
jest.mock('../lib/deposit')

describe('Account Log', () => {
  beforeEach(() => {
    this.withdraw_mock = new Withdraw()
    this.deposit_mock = new Deposit()
    this.account_log = new AccountLog(
      this.withdraw_mock, 
      this.deposit_mock
      )
    this.default_formatted_date = '01/01/1970';
    this.formatted_deposit_row = "10/01/2023 || 500.00 || || 1000.00"
    this.formatted_withdraw_row = "10/01/2023 || || 500.00 || 1000.00"
  });

  afterEach(() => {
    jest.spyOn(global.Date, 'now').mockRestore();
  });

  describe('#deposit', () => {
    it('updates the statement', () => {
      jest.spyOn(this.deposit_mock, 'format_deposit').mockReturnValue(this.formatted_deposit_row);
      
      this.account_log.deposit();
      expect(this.account_log.statement()).toContain(
        "10/01/2023 || 500.00 || || 1000.00",
      );
    });
  });

  describe('#withdraw', () => {
    it('updates the statement', () => {
      jest.spyOn(
        this.withdraw_mock, 'format_withdraw'
      ).mockReturnValue(
        this.formatted_withdraw_row
      );
      
      this.account_log.withdraw();
      expect(this.account_log.statement()).toContain(
        "10/01/2023 || || 500.00 || 1000.00",
      );
    });
  });

  describe('#formats date', () => {
    it('produces a formatted date', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);
      // 0 -> 01/01/1970
      let fulldate = new Date(Date.now());

      expect(
        this.account_log.formattedDate(fulldate)
        ).toEqual(
          this.default_formatted_date
        );
    });
  });
});
