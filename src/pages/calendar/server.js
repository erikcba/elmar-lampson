// server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/ical-feed', async (req, res) => {
  const url = 'https://feeds.overturehq.com/feeds/463b9a8f/20199892/6/performances.json';

  try {
    const response = await axios.get(url);
    res.set('Content-Type', 'text/calendar');
    res.send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching ICS');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
