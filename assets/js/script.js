let apiKey = "d79e7c1302e1954e9746b6da76d3cba5";
let currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=" + apiKey;
let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + geoLocation + "&appid=" + apiKey + "&units=imperial";
let locationUrl = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=1&appid=" + apiKey;
let latitude = data.coord.lat;
let longitude = data.coord.lon;
let temperature = data.main.temp;
let windSpeed = data.wind.speed;
let humidity = data.main.humidity;
// event listener to trigger functions
$(`#searchBtn`).on(`click`, function () {
    getForecast();
});

// function to get forecast
function getForecast() {

};
