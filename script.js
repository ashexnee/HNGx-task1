function displayUTCTime() {
    var currentTime = new Date();
    var utcMilliseconds = currentTime.getTime();
  
    document.getElementById("utc-time").textContent = utcMilliseconds.toString();
  }
  
  function displayDayOfWeek() {
    var daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var currentTime = new Date();
    var dayIndex = currentTime.getDay();
    var currentDayOfWeek = daysOfWeek[dayIndex];
  
    document.getElementById("day-of-week").textContent = currentDayOfWeek;
  }
  
  setInterval(displayUTCTime, 1000);
  displayDayOfWeek();