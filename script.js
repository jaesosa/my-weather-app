function getForecast(coordinates) {
    let apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(forecastUrl).then(displayForecast);
}

function showTemperature(response) {
let temperature = Math.round(celsiusTemp);
let tempElement = document.querySelector("#temperature");
tempElement.innerHTML = `${temperature}°`;

let wind = Math.round(response.data.wind.speed);
let windElement = document.querySelector("#wind")
windElement.innerHTML = `${wind}`;

let description = response.data.weather[0].description;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = `${description}`;

let iconElement = document.querySelector("#weather-icon");
iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);

celsiusTemp = response.data.main.temp;
getForecast(response.data.coord);
}

function displayForecast(response) {
let forecast = response.data.daily;
  
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
forecastHTML = 
 forecastHTML + 
 `
                <div class="col-2">
                   <div class="weather-forecast-day" id="forecast">${formatDay(forecastDay.dt)}</div>
                           <img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" 
                           class="weather-pics" id="first-icon" width="50" />
                           <div class="temperatures">
                           <span class="temp-max" id="max-one" mt-2> ${Math.round(forecastDay.temp.max)}° </span> |
                            <span class="temp-min" id="min-one" mt-2> ${Math.round(forecastDay.temp.min)}° </span>
                        </div>
                    </div>
                `;
    } 
   });
               
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function search(city) {
  let apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(weatherUrl).then(showTemperature);
}

function handleSubmit(event) {
event.preventDefault();
let searchInput = document.querySelector("#search-text-input");
let h1 = document.querySelector("h1");
h1.innerHTML = `${searchInput.value}`;
search(searchInput.value);
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];

let h2 = document.querySelector("h2");
h2.innerHTML = `${hour}:${minute} | ${day}, ${month} ${date}, ${year}`;

let celsiusTemp = null;

function conversion(event) {
    event.preventDefault();
let temperatureElement = document.querySelector("#temperature");
celsiusLink.classList.remove("active");
fahrenheitLink.classList.add("active");
let fahrenheitTemp = (celsiusTemp *9) /5 + 32;
temperatureElement.innerHTML = `${Math.round(fahrenheitTemp)}°`;
}

function reversion(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${Math.round(celsiusTemp)}°`;
    celsiusLink.classList.add("active");
    fahrenheitLink.classList.remove("active");
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", conversion);

let celsiusLink = document.querySelector("#celsius");
celsiusLink.addEventListener("click", reversion);

search("New York");
