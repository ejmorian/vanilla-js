# Notes for Weather App

## Description
This is a web application that allows users to get the current weather conditions and forecast for a specific location. The app provides the following features:

>Get the user's location and display the current weather conditions for their location.

>Allow users to search for weather conditions in a specific location.

>Display additional weather data such as humidity, wind speed, and the chance of precipitation.

>Include a feature to toggle between Celsius and Fahrenheit.

>Add a feature to display the weather forecast for the next few days.

## Implementation details

Get user's location
The app uses the getCurrentLocation function to get the user's current latitude and longitude using the navigator.geolocation.getCurrentPosition method. It then uses the OpenWeatherMap API's reverse endpoint to convert these coordinates to a city name. The city name is then used to display the current weather conditions for that location.

### Search for weather conditions

The app provides a search feature that allows users to search for weather conditions in a specific location. The getWeather function takes a cityName parameter and uses the OpenWeatherMap API's weather endpoint to get the weather conditions for the specified city. This function is called when the user clicks the "search" button after entering a city name into the input box.

### Display additional weather data

The app displays the current weather conditions for a location, including the temperature, description, humidity, and wind speed. The getWeather function returns an object that includes these values, which are then displayed on the webpage using DOM manipulation.

### Toggle between Celsius and Fahrenheit

The app provides a feature to toggle between Celsius and Fahrenheit. The toggleTemperature function is called when the user clicks the "C/F" button. This function uses the current city name to get the temperature in Celsius from the OpenWeatherMap API and then converts it to Fahrenheit. The temperature is displayed on the webpage with either a "°C" or "°F" unit, depending on the button toggle state.

### Display weather forecast

The app provides a feature to display the weather forecast for the next few days. The getWeatherForecast function takes a city parameter and uses the OpenWeatherMap API's forecast endpoint to get the weather forecast for the specified city. The forecast is displayed on the webpage with a list of weather conditions for the next few days.

### Technologies used

The app is built using HTML, CSS, and JavaScript. It also uses the OpenWeatherMap API to get weather data.


### Credits
The app was created by J Moriancumer Esguerra. It uses the OpenWeatherMap API to get weather data.