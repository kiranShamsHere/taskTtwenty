var day = new Date();
var hours = day.getHours();
if (hours >= 0 && hours < 12) {
  document.write("Good Morning!");
} else if (hours == 12) {
  document.write("Good Noon!");
} else if (hours >= 12 && hours <= 17) {
  document.write("Good Afternoon!");
} else {
  document.write("Good Evening!");
}