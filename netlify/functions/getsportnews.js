const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async (event, context) => {
  const newsApiKey = process.env.NEWSDATA_API_KEY;
  const { country } = event.queryStringParameters;

  if (!newsApiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "NEWSDATA_API_KEY environment variable not set." }),
    };
  }

  const url = `https://newsdata.io/api/1/news?apikey=${newsApiKey}&category=sports&country=${country}&language=en&size=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`NewsData.io API error! status: ${response.status}`);
    }
    const data = await response.json();

    if (Array.isArray(data)) {
      return {
        statusCode: 200,
        body: JSON.stringify(data),
      };
    } else {
      console.error("Error: NewsData.io response is not an array:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to load sports news: Unexpected response format - not an array' }),
      };
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load sports news' }),
    };
  }
};
