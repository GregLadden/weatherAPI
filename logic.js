


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
      const tempMax = Math.round(((parseFloat(data.main.temp_max) - 273.15) * 1.8) + 32);
      const tempMin = Math.round(((parseFloat(data.main.temp_min) - 273.15) * 1.8) + 32);
      const humidity = data.main.humidity;
      const cityName = document.getElementById('cityName')
      const temp = document.getElementById('temp')
      const todayHi = document.getElementById('todayHi')
      const todayLow = document.getElementById('todayLow')
      const currentHumidity = document.getElementById('currentHumidity')

      cityName.innerHTML = data.name;
      temp.innerHTML = `${currentTemp} &deg`;;
      todayHi.innerHTML = `${tempMax} &deg`;;
      todayLow.innerHTML = `${tempMin} &deg`;;
      currentHumidity.innerHTML = `${humidity}%`;
    }
  }
}
currentWeather.showWeather()