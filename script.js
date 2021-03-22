function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);

  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}°C`;
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

//Get your GPS coordinates
//display the city
// current temperature
function showGps(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "a6dd1b72720a6b8569eb4aedde277ef9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(position.coords);

  let city = position.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${city}`;

  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}°C`;

  axios.get(apiUrl).then(showGps);
}

function showPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showGps);
}

let button = document.querySelector("button");
button.addEventListener("click", showPosition);
