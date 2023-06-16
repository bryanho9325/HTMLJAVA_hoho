const checkClock = document.querySelector("#clock")
const date = new Date();


function displayTime () {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const miliseconds = String(date.getMilliseconds()).padStart(3, "0");
  checkClock.innerText = (`${hours}:${minutes}:${seconds}:${miliseconds}`);
}

displayTime()
setInterval(displayTime, 100)

