class DateFormatter {
  getFormattedDate() {
    return this.formattedDate(new Date(Date.now()));
  }

  formattedDate(fulldate) {
    this.day = String(fulldate.getDate()).padStart(2, '0');
    this.month = String(fulldate.getMonth() + 1).padStart(2, '0');
    this.year = fulldate.getFullYear();
    return `${this.day}/${this.month}/${this.year}`;
  }
}

module.exports = DateFormatter;
