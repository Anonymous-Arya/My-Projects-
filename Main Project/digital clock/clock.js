let a = document.getElementById("hr");
let b = document.getElementById("min");
let c = document.getElementById("sec");
let d = document.getElementsByClassName("am")[0];

setInterval(() => {
  let tim = new Date();
  hr = tim.getHours();
  min = tim.getMinutes();
  sec = tim.getSeconds();
  let pm = hr > 12 ? "PM" : "AM";
  d.innerHTML = pm;
  hr = hr % 12;
  hr = hr == 0 ? "12" : hr;
  a.innerHTML = (hr < 10 ? "0" : "") + hr;
  b.innerHTML = (min < 10 ? "0" : "") + min;
  c.innerHTML = (sec < 10 ? "0" : "") + sec;
}, 1000);