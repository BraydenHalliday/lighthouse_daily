function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}

function calculateDayInYear(date) {
 //Date is a string


 // Return Date as Array
  var splitDate = date.split('/');


 // Get each individual Date
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);

 // Call the daysInFeb
  var febDays = daysInFeb(year);
  if (isLeapYear(year) === true ) {
    febDays = 29 }
  else { febDays = 28 }
 // Array for the days in month
  var DAYS_IN_MONTH = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {

    if (isLeapYear(year) === true ) {

      console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    } else {
      console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    }
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }

 //
  function validMonth(month) {
    if (month && month >= 1 && month <= 12) {     return month }
    else console.log('invalid month')

  }

  function validDay(month, day) {
    if (day.length < 2) {
      day = '0' + day
    }

    if (day && day >= 1 && day <= DAYS_IN_MONTH[month - 1]) {
      return day  }
    else console.log('invalid day')

  }

 // This is broken
  function calculateDayNumber(month, day) {
    var dayOfYear = day;

    for (var i = 1; i < month; i++) {

      dayOfYear += DAYS_IN_MONTH[i - 1];
    }

    return dayOfYear;
  }

  function daysInFeb(year) {
    return 28;
  }

  function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }


  function isMultiple(numerator, denominator) {
    return numerator % denominator === 0;
  }
}




/*
   Below are some simple tests!

   They run the function with a predetermined parameter and compare the output to the value we are expecting to get!

   The console.log will output either 'true' or 'false' based on whether or not the function
   returns a value that matched our expected value.

   You'll know your code works correctly when all of these tests return 'true'
*/
console.log("Tests:");
console.log("---------------");
console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);