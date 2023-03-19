
let currentCity;

// Get the user's location and display the current weather conditions for their location
const getUserLocation = async () => {
  const APIKEY = "a2665728a2c7b60b06b2fc309b36a104";

  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
      })
    })

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKEY}`);
    const location = await response.json();

    return location;
  }
  catch (error) {
    console.log(error);
  }
}

const formatUserLocation = async () => {
  let formattedCity;

  await getUserLocation().then(result => {
    let city = result[0].name;

    if (city.includes("City Of ")) {
      formattedCity = city.replace("City Of ", "");
    } else {
      formattedCity = city;
    }
  })

  return formattedCity;
}

//Allow users to search for weather conditions in a specific location
const getWeather = (cityName) => {
  const APIKEY = "a2665728a2c7b60b06b2fc309b36a104";

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
    });
};

//Display weather data such as location and temperature
// additionally humidity, wind speed, and the chance of precipitation
const displayWeather = async (cityName) => {

  const { city, temperature, description, humidity, wind } = await getWeather(cityName);

  document.getElementById("city").textContent = `City: ${city}`;
  document.getElementById("description").textContent = `description: ${description}`;
  document.getElementById("humidity").textContent = `humidity: ${humidity}%`;
  document.getElementById("wind").textContent = `wind: ${wind}m/s`;

  document.getElementById("temperature").classList.add('celcius')
  toggleTemperature(cityName);

};

// feature to toggle between Celsius and Fahrenheit
const toggleTemperature = async (cityName) => {
  const { temperature } = await getWeather(cityName);

  const toggleUnit = document.getElementById("temperature");

  if (toggleUnit.classList.contains("celcius")) {
    let celcius = temperature - 273.15;
    document.getElementById(
      "temperature"
    ).textContent = `temperature: ${celcius.toFixed()}°`;

    toggleUnit.classList.remove("celcius");
  } else {
    let farenheit = ((temperature - 273.15) * 9) / 5 + 32;
    document.getElementById(
      "temperature"
    ).textContent = `temperature: ${farenheit.toFixed()}°F`;

    toggleUnit.classList.add("celcius");
  }

};

const init = () => {
  const toggle = document.getElementById("temperature");
  const searchButton = document.getElementById("search-button");
  const searchCurrent = document.getElementById('search-current-button');

  searchCurrent.addEventListener('click', () => {
    formatUserLocation().then(city => {
      currentCity = city;
      displayWeather(city)
    })
  })

  searchButton.addEventListener("click", () => {
    currentCity = document.getElementById('city-input');
    displayWeather(currentCity.value);
    currentCity.value = '';
  });

  toggle.addEventListener("click", () => { toggleTemperature(currentCity) });

};

window.onload = init;