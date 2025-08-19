import axios from 'axios';

export async function handler(event, context) {
  // Manejar preflight requests para CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      },
      body: ''
    };
  }

  const url = 'https://feeds.overturehq.com/feeds/463b9a8f/20199892/6/performances.json';

  try {
    const response = await axios.get(url);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json', // Cambiado a JSON
      },
      body: JSON.stringify(response.data), // Convertir a string
    };
  } catch (err) {
    console.error('Error fetching data:', err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        error: 'Error fetching data', 
        message: err.message 
      }),
    };
  }
}

