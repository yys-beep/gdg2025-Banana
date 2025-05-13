// netlify/functions/gemini-proxy.js

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.handler = async (event) => {
  try {
    const API_KEY = process.env.GEMINI_API_KEY; // Access the API key from environment variables

    if (!API_KEY) {
      console.error('GEMINI_API_KEY environment variable not set.');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Internal server error: API key not configured.' }),
      };
    }

    const MODEL_NAME = 'gemini-2.0-flash';
    const GOOGLE_AI_STUDIO_API_ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

    const { prompt, context } = JSON.parse(event.body);

    const payload = {
      contents: context.concat([
        {
          role: 'user',
          parts: [{ text: prompt }],
        },
      ]),
      generationConfig: {
        maxOutputTokens: 200,
        temperature: 0.2,
        topP: 1,
        topK: 32,
      },
    };

    const response = await fetch(GOOGLE_AI_STUDIO_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google AI Studio API Error:', errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: `Google AI Studio API request failed: ${response.status} - ${
            errorData?.error?.message || 'Unknown error'
          }`,
        }),
      };
    }

    const data = await response.json();
    const aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      statusCode: 200,
      body: JSON.stringify({ response: aiResponse.trim() }),
    };
  } catch (error) {
    console.error('Error in Netlify Function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
