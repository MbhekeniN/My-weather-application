function displayTemperature (response) {
    let temperatureElement = document.querySelector("#number")
    let Temperature = Math.round (response.data.temperature.current)
    temperatureElement.innerHTML = Temperature;
    let h1 = document.querySelector("#current-city")
    h1.innerHTML = response.data.city;
}

function search (event) {
    event.preventDefault();
    let input = document.querySelector ("#search-Input");
    let city = input.value ;

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=2fo4a0349e06dtd35a3306b4b26aea49`;


    axios.get(apiUrl).then(displayTemperature);
}