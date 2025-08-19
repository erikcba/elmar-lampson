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
    
    // Debug: Log de la respuesta para ver qué está devolviendo la API
    console.log('Response status:', response.status);
    console.log('Response data type:', typeof response.data);
    console.log('Response data:', JSON.stringify(response.data, null, 2));
    console.log('Response data length:', Array.isArray(response.data) ? response.data.length : 'Not an array');

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        dataType: typeof response.data,
        isArray: Array.isArray(response.data),
        dataLength: Array.isArray(response.data) ? response.data.length : 'Not an array',
        data: response.data
      }),
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
        message: err.message,
        stack: err.stack
      }),
    };
  }
}

