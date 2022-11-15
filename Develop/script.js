const now = setInterval(update, 1000);

function update() {
  let currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(currentDate);
}

$(".saveBtn").on("click", function () {
  var textValue = $(this).siblings(".description").val();
  var divKey = $(this).parent().attr("id");
  window.localStorage.setItem(divKey, textValue);
});

$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

let hour = moment().format("H");

$(".colorcode").each(function () {
  let divNumber = parseInt($(this).attr("id"));
  if (divNumber < hour) {
    $(this).removeClass("future");
    $(this).addClass("past");
  } else if (divNumber == hour) {
    $(this).addClass("present");
  } else if (divNumber > hour) {
    $(this).addClass("future");
  }
});
