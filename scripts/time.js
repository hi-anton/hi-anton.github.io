const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const myTimezone = "Europe/Berlin";

const userTimeHTML = document.querySelector('.visitor-time');
const myTimeHTML = document.querySelector('.my-time');

function getTime(timeZone) {
  return new Date().toLocaleTimeString("de-EU", {
    timeZone: timeZone,
    hour: '2-digit',
    minute: '2-digit',
  });
}

function updateTimes() {
  userTimeHTML.innerText = getTime(userTimezone);
  myTimeHTML.innerText = getTime(myTimezone);
}

updateTimes();
setInterval(updateTimes, 30000);
