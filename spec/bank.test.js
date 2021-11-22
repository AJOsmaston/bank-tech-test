const Bank = require('../lib/bank')
let test_bank = new Bank

describe ('Testing', () => {
  it('runs test', () => {
    expect(test_bank.number).toEqual(1)
  })
});

