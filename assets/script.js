var searchForm = document.querySelector('#search-form');
var findCityWeather =document.getElementById('#city-weather')

function searchBar(event) {
    event.preventDefault();

    var searchInput = document.querySelector('#search-input').value;

    if (!searchInput) {
        console.error('You need a search input value!');
        return;
      }
      var queryString = './search-results.html?q=' + searchInput;

      location.assign(queryString);
}

searchForm.addEventListener('search', searchBar);
findCityWeather.addEventListener ('click, requestWeather);