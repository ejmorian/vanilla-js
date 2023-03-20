
let currentCity;

const APIKEY = "a2665728a2c7b60b06b2fc309b36a104";

// Get weather forecast for the next few days
const getWeatherForecast = (city) => {

  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}`).then(response => response.json()).then(data => {

    let forecast = data.list.map(weather => {

      //convert unix to readable time
      const convertTime = new Date(weather.dt * 1000);
      const options = {
        day: 'numeric',
        month: 'short',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      };
      const time = convertTime.toLocaleDateString('en-US', options);
      //convert kelvin to celcius
      const celcius = weather.main.temp - 273.15;

      //retrieve relevant variable
      return ({

        time: time,
        description: weather.weather[0].description,
        temperature: celcius.toFixed()
      })
    })

    //display weather

    let weatherForecast = document.getElementById('weather-forecast');
    weatherForecast.innerHTML = `<h2>Weather Forecast</h2>`;

    forecast.forEach(forecast => {
      weatherForecast.innerHTML +=
        `<li>${forecast.time} : ${forecast.temperature}°C : ${forecast.description}</li>`;
    })

  })

}

// Get the user's location and display the current weather conditions for their location
const getCurrentLocation = async () => {

  // get user latitude and longitude
  const getPos = await new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      resolve({ lat, lon })
    }, (error) => {
      reject(console.log(error))
    })
  });

  // convert to city name
  const getCity = await new Promise((resolve, reject) => {

    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${getPos.lat}&lon=${getPos.lon}&limit=1&appid=${APIKEY}`)
      .then(response => response.json())
      .then(location => {
        let city = location[0].name;

        let formatCity;

        if (city.includes("City Of ")) {
          formatCity = city.replace("City Of ", "")
        } else {
          formatCity = city
        }

        resolve(formatCity);
      }).catch(error => {
        reject(console.log(error))
      })
  })

  //return city name
  return getCity;
}

//Allow users to search for weather conditions in a specific location
const getWeather = (cityName) => {

  // Get current weather data
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`
  )
    .then((response) => response.json())
    .then((weather) => {
      const city = weather.name;
      const temperature = weather.main.temp;
      const description = weather.weather[0].description;
      const humidity = weather.main.humidity;
      const wind = weather.wind.speed;

      return { city, temperature, description, humidity, wind };
    }).catch(error => (console.log(error)));
};

//Display weather data such as location and temperature. additionally humidity, wind speed, and the chance of precipitation
const displayWeather = async (cityName) => {

  //get weather values
  const { city, description, humidity, wind } = await getWeather(cityName);

  //update DOM
  document.getElementById("city").textContent = `City: ${city}`;
  document.getElementById("description").textContent = `description: ${description}`;
  document.getElementById("humidity").textContent = `humidity: ${humidity}%`;
  document.getElementById("wind").textContent = `wind: ${wind}m/s`;

  document.getElementById("temperature").classList.add('celcius')
  toggleTemperature(cityName);

  //Clear input box
  document.getElementById('city-input').value = "";
};

// feature to toggle between Celsius and Fahrenheit
const toggleTemperature = async (cityName) => {

  //get reference to toggle button
  const toggleUnit = document.getElementById("temperature");
  //get current weather temperature
  const { temperature } = await getWeather(cityName);

  // do calculations to display units
  if (toggleUnit.classList.contains("celcius")) {
    let celcius = temperature - 273.15;
    document.getElementById(
      "temperature"
    ).textContent = `temperature: ${celcius.toFixed()}°C`;

    toggleUnit.classList.remove("celcius");
  } else {
    let farenheit = ((temperature - 273.15) * 9) / 5 + 32;
    document.getElementById(
      "temperature"
    ).textContent = `temperature: ${farenheit.toFixed()}°F`;

    toggleUnit.classList.add("celcius");
  }

};

// Set up event listeners
const init = () => {
  //get reference to buttons and toggle
  const toggle = document.getElementById("temperature");
  const searchButton = document.getElementById("search-button");
  const searchCurrent = document.getElementById('search-current-button');

  //Display current location weather on click
  searchCurrent.addEventListener('click', () => {
    getCurrentLocation().then(city => {
      console.log(city)
      currentCity = city;
      displayWeather(city);
      getWeatherForecast(city);
    })
  })

  //Display searched location weather on click
  searchButton.addEventListener("click", () => {
    currentCity = document.getElementById('city-input').value;
    displayWeather(currentCity);
    getWeatherForecast(currentCity);
  });

  //toggle temperature on click
  toggle.addEventListener("click", () => {
    toggleTemperature(currentCity)
    console.log(currentCity)
  });

};

window.onload = init;
