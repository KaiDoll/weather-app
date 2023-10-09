var apiKey = "f23c92af2b429cef241bcb96ff0315fb";
var currentWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q=";
var forecastWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=";
var searchCityWeather = document.getElementById("search-city-form");
var unit = "units=imperial";

var forecastCityWeather = function (long, lati) {
  var apiUrl =
    forecastWeatherApi +
    "lat=" +
    lati +
    "&lon=" +
    long +
    "&appid=" +
    apiKey +
    "&" +
    unit;
  fetch(apiUrl).then(function (response) {
    return response.json();
  });
};
// fetch(apiUrl, { 
//   method: 'GET'
// })
// .then(function(response) { return response.json(); })
// .then(function(json) {
//   // use the json
// });
function currentCityWeather(findCityName) { //Current weather working
  var apiUrl = currentWeatherApi + findCityName + "&appid=" + apiKey + "&" + unit;
  fetch(apiUrl, {method: 'GET'})
  .then(function (response) {return response.json(); })
  .then(function (json) {
        //if the fetch call is ok then run another function that takes json as a parameter.
        document.getElementById("nameOfTheCity").innerHTML=json.name; //city name

        var date = dayjs().format('M/D/YYYY'); //date display eg 10/09/2023
        document.getElementById("todaysDate").innerHTML=date;
        var weatherIcon = (document.getElementsByClassName("weather-icon").src =
          "http://openweathermap.org/img/wn/" +
          json.weather[0].icon +
          "@2x.png");
        document
          .getElementById("weather-icon-0")
          .setAttribute("src", weatherIcon);
        document
          .getElementById("thermometer")
          .innerHTML=json.main.temp + " \u00B0F"; //shows up as Farenheit sign on the page.
        document
          .getElementById("hygrometer")
          .innerHTML=json.main.humidity + " %"; //response to main as it an object and humidity its property.
        document
          .getElementById("anemometer")
          .innerHTML=json.wind.speed + " MPH"; //response to wind as it an object and speed its property.
        var long = json.coord.lon;
        var lati = json.coord.lat;
        
        forecastCityWeather(long, lati);
      });
    } //This is calling the city name and the current date.

//Each function for 5 days forecast but it is not working! 
function cardOne(weatherData1) {
  
  document.getElementById("cardOneDate").innerHTML=weatherData1.dt; //convert dt to number date.
  var weatherIconUrlOne = 
    "http://openweathermap.org/img/wn/" + weatherData1.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-1")
    .setAttribute("src", weatherIconUrlOne);
  document
    .getElementById("thermometer1")
    .innerHTML=weatherData1.main.temp + " \u00B0F";
  document
    .getElementById("hygrometer1")
    .innerHTML=weatherData1.main.humidity + " %";
  document
    .getElementById("anemometer1")
    .innerHTML=weatherData1.wind.speed + " MPH";
}

function cardTwo(weatherData2) {
  document.getElementById("cardTwoDate").innerHTML(weatherData2.dt); //convert dt to number date.
  var weatherIconUrlTwo =
    "http://openweathermap.org/img/wn/" + weatherData2.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-2")
    .setAttribute("src", weatherIconUrlTwo);
  document
    .getElementById("thermometer2")
    .innerHTML(weatherData2.main.temp + " \u00B0F");
  document
    .getElementById("hygrometer2")
    .innerHTML(weatherData2.main.humidity + " %");
  document
    .getElementById("anemometer2")
    .innerHTML(weatherData2.wind.speed + " MPH");
}
//then executes whenever fetch finishes. function runs once fetch is finished.
//line 12-20 getting json out of the api call to populate the todays city weather.

function cardThree(weatherData3) {
  document.getElementById("cardThreeDate").innerHTML(weatherData3.dt); //convert dt to number date.
  var weatherIconUrlThree =
    "http://openweathermap.org/img/wn/" + weatherData3.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-3")
    .setAttribute("src", weatherIconUrlThree);
  document
    .getElementById("thermometer3")
    .innerHTML(weatherData3.main.temp + " \u00B0F");
  document
    .getElementById("hygrometer3")
    .innerHTML(weatherData3.main.humidity + " %");
  document
    .getElementById("anemometer3")
    .innerHTML(weatherData3.wind.speed + " MPH");
}

function cardFour(weatherData4) {
  document.getElementById("cardFourDate").innerHTML(weatherData4.dt); //convert dt to number date.
  var weatherIconUrlFour =
    "http://openweathermap.org/img/wn/" + weatherData4.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-4")
    .setAttribute("src", weatherIconUrlFour);
  document
    .getElementById("thermometer4")
    .innerHTML(weatherData4.main.temp + " \u00B0F");
  document
    .getElementById("hygrometer4")
    .innerHTML(weatherData4.main.humidity + " %");
  document
    .getElementById("anemometer4")
    .innerHTML(weatherData4.wind.speed + " MPH");
}

function cardFive(weatherData5) {
  document.getElementById("cardFiveDate").innerHTML(weatherData5.dt); //convert dt to number date.
  var weatherIconUrlFive =
    "http://openweathermap.org/img/wn/" + weatherData5.weather[0].icon + ".png";
  document
    .getElementById("weather-icon-5")
    .setAttribute("src", weatherIconUrlFive);
  document
    .getElementById("thermometer3")
    .innerHTML(weatherData5.main.temp + " \u00B0F");
  document
    .getElementById("hygrometer3")
    .innerHTML(weatherData5.main.humidity + " %");
  document
    .getElementById("anemometer3")
    .innerHTML(weatherData5.wind.speed + " MPH");
}
// var searchCitiesWeather() {
//   document.getElementById("search-city-form").innerHTML;
//   ;
//   cardOne();
//   cardTwo();
// }



var searchCitiesWeather = () => {
  var findCityName = document.getElementById('find-city').value
  currentCityWeather(findCityName)
};

// document.getElementById("search-city-form").addEventListener("click", searchCitiesWeather);