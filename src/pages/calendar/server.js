// server.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/ical-feed', async (req, res) => {
  const url = 'https://feeds.overturehq.com/calendar/feed/1794/20199892,/all/aa23ea26d9dd8faa3b3d765e32d78d557287d221.ics';

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
