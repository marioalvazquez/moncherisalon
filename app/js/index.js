$(document).ready(() => {
  servicesHeight();
  $('.tooltipped').tooltip({delay: 50});

  $('.timepicker').pickatime({
    default: 'now', // Set default time
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
});

function servicesHeight() {
  const heights = [];
  const cards = $('.services-card');

  for (var i = 0; i < cards.length; i++) {
    heights.push($(cards[i]).height());
  }
  $(cards).height(Math.max(...heights));
  console.log(heights);
}
