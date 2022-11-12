const timeNow = document.querySelector("#currentDay");

const schedule9am = document.querySelector("#hour-9");
const schedule10am = document.querySelector("#hour-10");
const schedule11am = document.querySelector("#hour-11");
const schedule12am = document.querySelector("#hour-12");
const schedule1pm = document.querySelector("#hour-13");
const schedule2pm = document.querySelector("#hour-14");
const schedule3pm = document.querySelector("#hour-15");
const schedule4pm = document.querySelector("#hour-16");
const schedule5pm = document.querySelector("#hour-17");

let scheduleTimes = [
  schedule9am,
  schedule10am,
  schedule11am,
  schedule12am,
  schedule1pm,
  schedule2pm,
  schedule3pm,
  schedule4pm,
  schedule5pm,
];
// Wrap all code that interacts wiconstthe DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  let now = dayjs();
  timeNow.innerText = now;
});
