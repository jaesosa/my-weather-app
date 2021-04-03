function showTemperature(response) {
let temperature = Math.round(response.data.main.temp);
let tempElement = document.querySelector("#temperature");
tempElement.innerHTML = `${temperature}°`;

let wind = Math.round(response.data.wind.speed);
let windElement = document.querySelector("#wind")
windElement.innerHTML = `${wind}`;

let description = response.data.weather[0].description;
let descriptionElement = document.querySelector("#description");
descriptionElement.innerHTML = `${description}`;

let iconElement = document.querySelector("#weather-icon")
iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);


}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;

  let apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;

  axios.get(weatherUrl).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

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
let minute = now.getMinutes();

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
