function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonClock = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonClock.format("MMMM	Do YYYY");
    londonTimeElement.innerHTML = londonClock.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let saoPauloElement = document.querySelector("#saopaulo");
  if (saoPauloElement) {
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");
    let saoPauloClock = moment().tz("America/Sao_Paulo");

    saoPauloDateElement.innerHTML = saoPauloClock.format("MMMM	Do YYYY");
    saoPauloTimeElement.innerHTML = saoPauloClock.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoClock = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoClock.format("MMMM	Do YYYY");
    tokyoTimeElement.innerHTML = tokyoClock.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
