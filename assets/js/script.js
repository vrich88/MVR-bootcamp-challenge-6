let searchForm = $(`#searchForm`);
let newSearch = $(`#searchInput`).val();
let searchBtn = $(`#searchBtn`);
let recentList = $(`#recentList`);

let recentCities = [];
let lastCity = "";

let apiKey = "d79e7c1302e1954e9746b6da76d3cba5";

// event listener for a new search
searchBtn.on(`click`, function (event) {
    event.preventDefault();
    let citySearch = $(`#searchInput`).val();
    getForecast(citySearch);
    predictForecast(citySearch);
    $(`#searchInput`).val("");
}
);

// function to fetch data to get forecast
function getForecast(citySearch) {
    console.log(`getForecast on ` + citySearch)
    if (citySearch !== "") {
        let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q="
            + citySearch + "&units=imperial&appid=" + apiKey;
        fetch(weatherUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json()
                        .then(function (data) {
                            $(`#currentTitle`).text(data.name);
                            $(`#currentIcon`).append(`<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" />`);
                            $(`#currentDate`).text(dayjs(data.dt * 1000).format("MM/DD/YYYY"));
                            $(`#currentTemperature`).text(data.main.temp.toFixed(0));
                            $(`#currentWindSpeed`).text(data.wind.speed.toFixed(0));
                            $(`#currentHumidity`).text(data.main.humidity.toFixed(0));
                        })
                } else {
                    alert("There seems to be an issue finding your forecast. Please try entering the city again.")
                }
            })
    } else {
        alert("You need to search a city first to get your forecast.")
    }
};

// function to fetch 5 day future forecast
function predictForecast(citySearch) {
    console.log(`predictForecast on ` + citySearch)
    if (citySearch !== "") {
        let futureUrl = "https://api.openweathermap.org/data/2.5/forecast?q="
            + citySearch + "&units=imperial&appid=" + apiKey;
        fetch(futureUrl)
            .then(function (response) {
                if (response.ok) {
                    response.json()
                        .then(function (data) {
                            // 
                        })
                } else {
                    alert("There seems to be an issue finding the future forecast. Please try again later.")
                }
            })
    }
};