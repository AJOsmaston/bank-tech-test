const Bank = require('../lib/bank')
let bank = new Bank

describe ('Deposit', () => {
  it('allows a deposit', () => {
    let balance = bank.balance 
    balance += 5
    bank.deposit(5)

    expect(bank.balance).toEqual(balance)
  })
});

