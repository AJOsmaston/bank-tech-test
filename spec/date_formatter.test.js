const DateFormatter = require('../lib/date_formatter')
describe('DateFormatter', () => {
  beforeEach(() => {
    this.date_formatter = new DateFormatter
    this.default_formatted_date = '01/01/1970';
  });

  describe('#formats date', () => {
    it('produces a formatted date', () => {
      jest.spyOn(global.Date, 'now').mockReturnValue(0);
      // 0 -> 01/01/1970

      expect(
        this.date_formatter.getFormattedDate()
        ).toEqual(
          this.default_formatted_date
        );
    });
  });
});
