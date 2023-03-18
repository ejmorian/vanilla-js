const displayWeather = async () => {
  const { city, temperature, description, humidity, wind } = await getWeather();

  document.getElementById("city").textContent = `City: ${city}`;
  document.getElementById("temperature").textContent = `temperature: ${(
    temperature - 273.15
  ).toFixed()}°`;
  document.getElementById(
    "description"
  ).textContent = `description: ${description}`;
  document.getElementById("humidity").textContent = `humidity: ${humidity}%`;
  document.getElementById("wind").textContent = `wind: ${wind}m/s`;

  console.log(city, temperature, description, humidity, wind);
};

const getWeather = () => {
  const APIKEY = "a2665728a2c7b60b06b2fc309b36a104";
  const CITYNAME = document.getElementById("city-input").value;

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${CITYNAME}&appid=${APIKEY}`
  )
    .then((response) => response.json())
    .then((weather) => {
      console.log(weather);
      const city = weather.name;
      const temperature = weather.main.temp;
      const description = weather.weather[0].description;
      const humidity = weather.main.humidity;
      const wind = weather.wind.speed;

      return { city, temperature, description, humidity, wind };
    });
};

const init = () => {
  const searchButton = document.getElementById("search-button");

  searchButton.addEventListener("click", displayWeather);
};

window.onload = init;
