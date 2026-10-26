# Weather App 🌤️

A simple weather application built using HTML, CSS, and JavaScript that fetches real-time weather data using the OpenWeather API.

## Features

* Search weather by city name
* Current temperature display
* Weather condition description
* Feels-like temperature
* Humidity information
* Search using Enter key or button click
* Error handling for invalid city names

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* OpenWeather API

## How It Works

1. User enters a city name.
2. The app uses the OpenWeather Geocoding API to retrieve latitude and longitude coordinates.
3. Weather data is fetched using the coordinates.
4. Current weather information is displayed on the screen.

## Project Structure

```text
index.html
styles.css
script.js
```

## API key safety

The OpenWeather API key is used by browser-side JavaScript, so it is visible in source and network requests. Restrict it in the provider dashboard to the required APIs and exact site referrers before use. Do not commit an unrestricted key. For a key that must remain private, route requests through a server-side proxy.

## Future Improvements

* Weather icons
* Wind speed and pressure
* 5-day weather forecast
* Loading spinner
* Dark/Light theme toggle
* Geolocation support

## Author

Yashes Kartik
