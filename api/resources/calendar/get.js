if (query.full === true || this.id) {
  dpd.months.get({calendarId: this.id, $limitRecursion: 12 }, function(months) {
    this.months = months;
  }); 
} else {
  delete this.months;
}

