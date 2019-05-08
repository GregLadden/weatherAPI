


const currentWeather = {

  showWeather: function () {
    const testButton = document.getElementById('testButton');

    testButton.addEventListener('click', function (zipCode, country) {
      const searchZipTextInput = document.getElementById('searchZipTextInput');
      const searchCountryTextInput = document.getElementById('searchCountryTextInput')
      zipCode = parseInt(searchZipTextInput.value);
      country = searchCountryTextInput.value

      const key = '638f24bfdcba6d2e495a079fe6fd882f'
      fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${country}&APPID=${key}`)
        .then(resp => { return resp.json() }) // Convert data to json
        .then(data => {
          console.log(data);
          currentWeather.displayData(data)
          searchCountryTextInput.value = ''
          searchZipTextInput.value = ''
        })
        .catch(function (error) {
          // catch any errors
          console.log(error)
        });
    })
  },
  displayData: function (data) {

    if (data.cod === '404') {
      document.getElementById('cityName').innerHTML = `${data.message}. Please try again`;
    } else {
      const currentTemp = Math.round(((parseFloat(data.main.temp) - 273.15) * 1.8) + 32);
      const todayHi = Math.round(((parseFloat(data.main.temp_max) - 273.15) * 1.8) + 32);
      const todayLow = Math.round(((parseFloat(data.main.temp_min) - 273.15) * 1.8) + 32);
      const currentHumidity = data.main.humidity;

      document.getElementById('cityName').innerHTML = data.name;
      document.getElementById('temp').innerHTML = `${currentTemp} &deg`;;
      document.getElementById('todayHi').innerHTML = `${todayHi} &deg`;;
      document.getElementById('todayLow').innerHTML = `${todayLow} &deg`;;
      document.getElementById('currentHumidity').innerHTML = `${currentHumidity}%`;
    }
  }
}
currentWeather.showWeather()