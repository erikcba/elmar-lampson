import axios from 'axios';

export async function handler(event, context) {
  const url =
    'https://feeds.overturehq.com/feeds/463b9a8f/20199892/6/performances.json';

  try {
    const response = await axios.get(url);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Permite llamadas desde cualquier dominio
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'text/calendar',
      },
      body: response.data,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: 'Error fetching ICS',
    };
  }
}

