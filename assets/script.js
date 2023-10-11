var apiKey = "f23c92af2b429cef241bcb96ff0315fb";
var currentWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecastWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=";
var searchCityWeather = document.getElementById("search-city-form");
var unit = "units=imperial";
var findCity = document.getElementById("find-city");
var searchBtn = document.getElementById("search-city-form");
var storedCity = document.getElementById("storedCity");
var searchHistory = JSON.parse(localStorage.getItem("cities")) || [];
var oldSearch = document.getElementById("old-search");

var forecastCityWeather = function (city) {
  var apiUrl = forecastWeatherApi + city + "&appid=" + apiKey + "&" + unit;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      cardOne(data.list[4]);
      cardTwo(data.list[12]);
      cardThree(data.list[20]);
      cardFour(data.list[28]);
      cardFive(data.list[36]);
    });
};
//fetch the 5 day forecast API from open weather and add the other functions 
//card so when this function is called the other functions will help display the forecast. 

function currentCityWeather(findCityName) {
  //Current weather working
  var apiUrl =
    currentWeatherApi + findCityName + "&appid=" + apiKey + "&" + unit;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      storeInStorage(json.name);
      //if the fetch call is ok then run another function that takes json as a parameter.
      document.getElementById("nameOfTheCity").innerHTML = json.name; //city name
      var date = dayjs().format("M/D/YYYY"); //date display eg 10/09/2023
      document.getElementById("todaysDate").innerHTML = date;
      var weatherIcon = (document.getElementsByClassName("weather-icon").src =
        "http://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png");
      document
        .getElementById("weather-icon-0")
        .setAttribute("src", weatherIcon);
      document.getElementById("thermometer").innerHTML =
        json.main.temp + " \u00B0F"; //shows up as Farenheit sign on the page.
      document.getElementById("hygrometer").innerHTML =
        json.main.humidity + " %"; //response to main as it an object and humidity its property.
      document.getElementById("anemometer").innerHTML =
        json.wind.speed + " MPH"; //response to wind as it an object and speed its property.
    });
} //This function is calling the city name and the current date.

function storeInStorage(city) {
  if (searchHistory.includes(city)) {
    return;
  }

  searchHistory.unshift(city);
  localStorage.setItem("cities", JSON.stringify(searchHistory));
  showOldHistory()
}

function cardOne(weatherData) {
  var formattedDate = new Date(weatherData.dt * 1000).toLocaleDateString();
  document.getElementById("cardOneDate").innerHTML = formattedDate; //convert dt to number date.
  var weatherIconUrlOne =
    "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-1")
    .setAttribute("src", weatherIconUrlOne);
  document.getElementById("thermometer1").innerHTML =
    weatherData.main.temp + " \u00B0F";
  document.getElementById("hygrometer1").innerHTML =
    weatherData.main.humidity + " %";
  document.getElementById("anemometer1").innerHTML =
    weatherData.wind.speed + " MPH";
}

function cardTwo(weatherData) {
  var formattedDate = new Date(weatherData.dt * 1000).toLocaleDateString();
  document.getElementById("cardTwoDate").innerHTML = formattedDate; //convert dt to number date.
  var weatherIconUrlTwo =
    "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-2")
    .setAttribute("src", weatherIconUrlTwo);
  document.getElementById("thermometer2").innerHTML =
    weatherData.main.temp + " \u00B0F";
  document.getElementById("hygrometer2").innerHTML =
    weatherData.main.humidity + " %";
  document.getElementById("anemometer2").innerHTML =
    weatherData.wind.speed + " MPH";
}

function cardThree(weatherData) {
  var formattedDate = new Date(weatherData.dt * 1000).toLocaleDateString();
  document.getElementById("cardThreeDate").innerHTML = formattedDate;
  //convert dt to number date.
  var weatherIconUrlThree =
    "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-3")
    .setAttribute("src", weatherIconUrlThree);
  document.getElementById("thermometer3").innerHTML =
    weatherData.main.temp + " \u00B0F";
  document.getElementById("hygrometer3").innerHTML =
    weatherData.main.humidity + " %";
  document.getElementById("anemometer3").innerHTML =
    weatherData.wind.speed + " MPH";
}

function cardFour(weatherData) {
  var formattedDate = new Date(weatherData.dt * 1000).toLocaleDateString();
  document.getElementById("cardFourDate").innerHTML = formattedDate;
  var weatherIconUrlFour =
    "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-4")
    .setAttribute("src", weatherIconUrlFour);
  document.getElementById("thermometer4").innerHTML =
    weatherData.main.temp + " \u00B0F";
  document.getElementById("hygrometer4").innerHTML =
    weatherData.main.humidity + " %";
  document.getElementById("anemometer4").innerHTML =
    weatherData.wind.speed + " MPH";
}

function cardFive(weatherData) {
  var formattedDate = new Date(weatherData.dt * 1000).toLocaleDateString();
  document.getElementById("cardFiveDate").innerHTML = formattedDate;
  var weatherIconUrlFive =
    "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-5")
    .setAttribute("src", weatherIconUrlFive);
  document.getElementById("thermometer5").innerHTML =
    weatherData.main.temp + " \u00B0F";
  document.getElementById("hygrometer5").innerHTML =
    weatherData.main.humidity + " %";
  document.getElementById("anemometer5").innerHTML =
    weatherData.wind.speed + " MPH";
}
//Each function for 5 days forecast.
var searchCitiesWeather = () => {
  var findCityName = document.getElementById("find-city").value;
  runSearch(findCityName);
};

function runSearch(findCityName) {
 
  currentCityWeather(findCityName);
  forecastCityWeather(findCityName);
}
//This function call the other two function that runs the current and forecast api. 
function showOldHistory() {
  oldSearch.innerHTML = "";
  for (var i = 0; i < 5; i++) {
    var displaySearch = document.createElement("button");
    displaySearch.textContent = searchHistory[i];

    displaySearch.addEventListener("click", function () {
      runSearch(this.textContent);
    });
    oldSearch.append(displaySearch);
  }
}

showOldHistory();
//This function pulls the city from the local storage and 
//appends the button and puts the recent search city on the page.
searchBtn.addEventListener("click", searchCitiesWeather);
