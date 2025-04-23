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
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const location = data.results[0].geometry;
                const lat = location.lat;
                const lng = location.lng;

                // Call OpenWeatherMap API for weather data
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`)
                    .then(response => response.json())
                    .then(weatherData => {
                        console.log(weatherData.hourly);
                        console.log(weatherData);
                        const weatherDiv = document.getElementById("weather");
                        const temp = weatherData.main.temp;
                        const feelsLike = weatherData.main.feels_like;
                        const humidity = weatherData.main.humidity;
                        const weather = weatherData.weather[0].description.charAt(0).toUpperCase()+weatherData.weather[0].description.slice(1);
                        const cityName = weatherData.name;
                        const icon = getWeatherEmoji(weatherData.weather[0].id);
                        let tip = "";
                        if (weather.includes("rain")) tip = "Bring your umbrella!";
                        else if (temp > 30) tip = "A sunny day in your location, consider wearing your UV protection!";
                        else if (temp < 20) tip = "Wear something warm!";
                        else tip = "Have a great day!";

                        weatherDiv.innerHTML = `
                            <h3>Weather Information for ${cityName}</h3><br>
                            <p>Temperature: ${temp}°C</p><br>
                            <p>Feels like: ${feelsLike}°C</p><br>
                            <p>Humidity: ${humidity}°C</p><br>
                            <p>Condition: ${weather}</p><br>
                            <p>Tip: ${tip}</p><br>
                            <h1 id="weather-icon">${icon}</h1>
                        `;
                        document.getElementById('results').textContent = ``;
                        document.getElementById("weather").style.height = "100% auto";
                    })
                    .catch(error => {
                        console.error("Error fetching weather:", error);
                        document.getElementById("weather").textContent = "Weather information could not be retrieved. Please try again later.";
                        document.getElementById('results').textContent = ``;
                    });
            } else {
                document.getElementById('results').textContent = `No results found for '${city}'`;
                document.getElementById("weatherInfo").textContent = ""; 
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error fetching data. Please try again later.');
        });
}

function getWeatherEmoji(weatherId){
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
