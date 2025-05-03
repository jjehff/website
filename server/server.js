import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const API_KEY = process.env.PEXELS_API;

app.use(cors());

app.get('/api/photo', async (req, res) => {
  const page = Math.floor(Math.random() * 50) + 1;
  const response = await fetch(`https://api.pexels.com/v1/curated?per_page=15&page=${page}`, {
  headers: { Authorization: API_KEY }
  });
  const data = await response.json();
  const photo = data.photos[Math.floor(Math.random() * data.photos.length)];
  res.json({ url: photo.src.large });
});

app.listen(1234, () => {
  console.log("Server is up!");
});

