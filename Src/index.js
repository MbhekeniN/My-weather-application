function displayTemperature (response) {
    let temperatureElement = document.querySelector("#number");
    let Temperature = Math.round (response.data.temperature.current);
    temperatureElement.innerHTML = Temperature;
    let h1 = document.querySelector("#city");
    h1.innerHTML = response.data.city;
    let conditionsElement = document.querySelector("#current-Conditions");
    let humidityElement = document.querySelector("#current-Humidity");
    let windSpeedElement = document.querySelector("#current-Wind");
    let iconElement = document.querySelectorAll("#icon")
    conditionsElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windSpeedElement.innerHTML = response.data.wind.speed;
    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="Icon" />`;
}

function search (event) {
    event.preventDefault();
    let input = document.querySelector ("#search-Input");
    let city = input.value;

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2fo4a0349e06dtd35a3306b4b26aea49`;


    axios.get(apiUrl).then(displayTemperature);
}

let now = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",]

let Day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");

let date = document.querySelector("#timeAndDate");
date.innerHTML = `${Day} ${hour}:${minutes}, `;

let form = document.querySelector("form");
form.addEventListener("submit", search);

