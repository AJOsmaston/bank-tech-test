const Account = require('../../lib/account');

describe('Feature test', () => {
  it('runs the example', () => {
    const account = new Account();
    jest.spyOn(global.Date, 'now').mockReturnValue(1673308800000);
    account.deposit(1000);
    jest.spyOn(global.Date, 'now').mockReturnValue(1673568000000);
    account.deposit(2000);
    jest.spyOn(global.Date, 'now').mockReturnValue(1673654400000);
    account.withdraw(500);

    expect(account.statement()).toEqual([
      'date || credit || debit || balance',
      '14/01/2023 || || 500.00 || 2500.00',
      '13/01/2023 || 2000.00 || || 3000.00',
      '10/01/2023 || 1000.00 || || 1000.00',
    ]);
  });
});
