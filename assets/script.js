var apiKey = "f23c92af2b429cef241bcb96ff0315fb";
var currentWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q="
var forecastWeatherApi = "https://api.openweathermap.org/data/2.5/forecast?q="
var searchCityWeather = document.getElementById('search-form')
var unit = "units=imperial";


//The city name and the date
function getCityWeather(findCityName) {
  var apiUrl = currentWeatherApi + findCityName + "&" + apiKey + "&" + unit;
  fetch(apiUrl).then(function (response) {
    if(response.ok) {
      return response.json().then(function (response) {
        document.getElementById('nameOfTheCity').innerHTML(response.name); 

        var date= dayjs('M/D/YYYY')
        document.getElementById('todaysDate').innerHTML(date);
      })
    }  else {
      alert("Please provide a valid city name.");
    }  

  })
}