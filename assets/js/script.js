// Get current date and time
var today = $("#currentDay");
var now = moment();

// Set current date and time
today.text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// Create function to change background color of time blocks based on time
function checkTime() {
  var currentHour = now.hour();
  $(".description").each(function () {
    var hour = parseInt($(this).prev().text());
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

// Call function to change background color of time blocks based on time
checkTime();

// Create function to save tasks to local storage
$(".saveBtn").on("click", function () {
  var task = $(this).prev().val().trim();
  var hour = $(this).prev().prev().text();
  localStorage.setItem(hour, task);
});

// Get saved tasks from local storage
$(".description").each(function () {
  var hour = $(this).prev().text();
  var savedTask = localStorage.getItem(hour);
  if (savedTask !== null) {
    $(this).val(savedTask);
  }
});

// Update current time every second
setInterval(function () {
  now = moment();
  today.text(now.format("dddd, MMMM Do YYYY, h:mm:ss a"));
  checkTime();
}, 1000); // 1000 ms aka every second
