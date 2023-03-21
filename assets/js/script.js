$(document).ready(function() {
    // Display current day at the top of the calendar
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDay);



});