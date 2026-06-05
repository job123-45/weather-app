document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherinfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const TempDisplay = document.getElementById("temperature");
  const DiscDsiplay = document.getElementById("description");
  const ErrorMssg = document.getElementById("error-message");

  const humidity = document.createElement('p');
  const feelslike = document.createElement('p');
  humidity.id = 'humidity';
  feelslike.id = 'feelslike';
  weatherinfo.appendChild(feelslike);
  weatherinfo.appendChild(humidity);

  const hum = document.getElementById('humidity');
  const fl = document.getElementById('feelslike');

  const API_KEY = "....";

  getWeatherBtn.addEventListener('click', async () => {
    let city = cityInput.value.trim();

    if (!city) return;

    try {
      let data = await getWeather(city);
      displayData(data);
    } catch (error) {
      showError();
    }
  });

  // ENTER KEY SUPPORT
  cityInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      getWeatherBtn.click();
    }
  });

  async function getWeather(city) {
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (!geoResponse.ok) return;

    if (geoData.length === 0) {
      throw new Error("City not found");
    }

    const { lat, lon } = geoData[0];
    console.log(`${lat} and ${lon}`);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    console.log(typeof weatherData);
    console.log(weatherData);

    return weatherData;
  }

  function displayData(data) {
    const { name, main, weather } = data;

    cityName.textContent = name;
    TempDisplay.textContent = `Temperature :${main.temp}`;
    DiscDsiplay.textContent = `Weather : ${weather[0].description}`;

    hum.textContent = `Humidity :${main.humidity}`;
    fl.textContent = `Feels like :${main.feels_like}`;

    weatherinfo.classList.remove('hidden');
    ErrorMssg.classList.add('hidden');
  }

  function showError() {
    ErrorMssg.classList.remove("hidden");
    weatherinfo.classList.add("hidden");
  }
});
