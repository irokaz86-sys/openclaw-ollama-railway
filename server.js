const express = require('express');
const { Telegraf } = require('telegraf');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HEALTH CHECK - Shows "OpenClaw Live!"
app.get('/', (req, res) => {
  res.send('<h1>OpenClaw Railway Live! 🚀</h1><p>Bot ready for TELEGRAM_TOKEN</p>');
});

// Bot placeholder
app.get('/bot', (req, res) => res.send('Bot endpoint ready'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 OpenClaw running on port ${port}`);
});
