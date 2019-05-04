
function showWeather(zipCode, countryName) {
  const key = '638f24bfdcba6d2e495a079fe6fd882f'
  fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + ',' + countryName + '&APPID=' + key)
    .then(resp => { return resp.json() }) // Convert data to json
    .then(data => {
      console.log(data);
      handlers(data)
    })
    .catch(function () {
      // catch any errors
    });
}

function handlers(data) {
  const fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.
  document.getElementById('cityName').innerHTML = data.name
  document.getElementById('cityName').innerHTML = data.name
}

window.onload = function () {
  showWeather('78731', 'US');
}