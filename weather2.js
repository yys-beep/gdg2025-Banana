function myNavigateButton() {
  document.getElementById('results').textContent = "Loading...";
  document.getElementById("weather").innerHTML = "";
  const city = document.getElementById('cityInput').value;

  if (!city) {
    alert('Please enter a city name');
    return;
  }

  const functionUrl = `https://easeandaccess.netlify.app/.netlify/functions/getlocationweather?city=${encodeURIComponent(city)}`;

  fetch(functionUrl)
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => { throw err; });
      }
      return response.json();
    })
    .then(data => {
      const { weatherData, cityName, weatherCondition, main } = data;
      console.log(weatherData);
      const weatherDiv = document.getElementById("weather");
      const temp = main.temp;
      const feelsLike = main.feels_like;
      const humidity = main.humidity;
      const weather = weatherCondition.description.charAt(0).toUpperCase() + weatherCondition.description.slice(1);
      const icon = getWeatherEmoji(weatherCondition.id);
      let tip = "";
      if (weather.includes("rain")) tip = "Bring your umbrella!";
      else if (temp > 30) tip = "A sunny day in your location, consider wearing your UV protection!";
      else if (temp < 20) tip = "Wear something warm!";
      else tip = "Have a great day!";

      weatherDiv.innerHTML = `
        <h3>Weather Information for ${cityName}</h3><br>
        <p>Temperature: ${temp}°C</p><br>
        <p>Feels like: ${feelsLike}°C</p><br>
        <p>Humidity: ${humidity}%</p><br>
        <p>Condition: ${weather}</p><br>
        <p>Tip: ${tip}</p><br>
        <h1 id="weather-icon">${icon}</h1>
      `;
      document.getElementById('results').textContent = ``;
      document.getElementById("weather").style.height = "100% auto";
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById("weather").textContent = error.error || "Weather information could not be retrieved.";
      document.getElementById('results').textContent = ``;
    });
}

function getWeatherEmoji(weatherId) {
  switch(true){
        case(weatherId >= 200 && weatherId<300):
            return "⛈️";
        case(weatherId >= 300 && weatherId<400):
            return "🌧️";
        case(weatherId >= 500 && weatherId<600):
            return "🌧️";    
        case(weatherId >= 500 && weatherId<600):
            return "🌨️";    
        case(weatherId >= 600 && weatherId<700):
            return "🌫️"; 
        case(weatherId === 800):
            return "☀️"; 
        case(weatherId >= 801 && weatherId<805):
            return "☁️";
        default:
            return "❓";
    }
}

document.getElementById('results').textContent = "Enter a city";
