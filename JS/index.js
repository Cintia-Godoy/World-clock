function updateTime() {
  let londonElement = document.querySelector("#london");

  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonClock = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonClock.format("MMMM	Do YYYY");
  londonTimeElement.innerHTML = londonClock.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let rioElement = document.querySelector("#rio");

  let rioDateElement = rioElement.querySelector(".date");
  let rioTimeElement = rioElement.querySelector(".time");
  let rioClock = moment().tz("Brazil/East");

  rioDateElement.innerHTML = rioClock.format("MMMM	Do YYYY");
  rioTimeElement.innerHTML = rioClock.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
