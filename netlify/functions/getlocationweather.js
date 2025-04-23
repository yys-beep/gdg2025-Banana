const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async (event, context) => {
  const locationApiKey = process.env.OPENCAGE_API_KEY;
  const weatherApiKey = process.env.OPENWEATHER_API_KEY;
  const { city } = event.queryStringParameters;

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please provide a city name." }),
    };
  }

  try {
    // Fetch location data from OpenCage
    const locationUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(city)}&key=${locationApiKey}&language=en&pretty=1`;
    const locationResponse = await fetch(locationUrl);
    if (!locationResponse.ok) {
      throw new Error(`OpenCage API error! status: ${locationResponse.status}`);
    }
    const locationData = await locationResponse.json();

    if (locationData.results.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: `No results found for '${city}'` }),
      };
    }

    const { lat, lng } = locationData.results[0].geometry;

    // Fetch weather data from OpenWeatherMap
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${weatherApiKey}&units=metric`;
    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) {
      throw new Error(`OpenWeatherMap API error! status: ${weatherResponse.status}`);
    }
    const weatherData = await weatherResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ weatherData, cityName: weatherData.name, weatherCondition: weatherData.weather[0], main: weatherData.main }),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch location or weather data' }),
    };
  }
};
