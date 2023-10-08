var apiKey = "f23c92af2b429cef241bcb96ff0315fb";
var currentWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q="
var forecastWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q="
var searchCityWeather = document.getElementById('search-form')
var unit = "units=imperial";

function currentCityWeather(findCityName) {
  var apiUrl = currentWeatherApi + findCityName + "&" + apiKey + "&" + unit; 
  fetch(apiUrl).then(function (response) {
    if(response.ok) {
      return response.json().then(function (response) {
        document.getElementById('nameOfTheCity').innerHTML(response.name); 

        var date= dayjs('M/D/YYYY') //date display eg 10/09/2023
        document.getElementById('todaysDate').innerHTML(date);
        var weatherIcon = document.getElementsByClassName('weather-icon').src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
        document.getElementById('weather-icon-0').setAttribute('src', weatherIcon);
        document.getElementById('thermometer').innerHTML(response.main.temp + " \u00B0F"); //shows up as Farenheit sign on the page. 
        document.getElementById('hygrometer').innerHTML(response.main.humidity + " %"); //response to main as it an object and humidity its property.
        document.getElementById('anemometer').innerHTML(response.wind.speed + " MPH"); //response to wind as it an object and speed its property.
        forecastCityWeather(long,lati)
      })
    }  else {
      alert("Invalid city name.");
    }  //This is calling the city name and the current date. 
    var long = response.coord.lon;
    var lati = response.coord.lat;
      
    var forecastCityWeather = function (long, lati) {
      var apiUrl = forecastWeatherApi + "lat=" + lati + "&lon" + long + "&appid=" + apiKey + "&" + unit;
fetch(apiUrl).then(function (response) {
  return response.json();
})
    } 

  })
}

  