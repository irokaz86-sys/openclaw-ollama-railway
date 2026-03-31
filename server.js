const express = require('express');
const { Telegraf } = require('telegraf');
const { OpenClaw } = require('openclaw');
const ollama = require('ollama');

const app = express();
app.use(express.json());

const claw = new OpenClaw({
  model: process.env.MODEL || 'qwen3.5:9b',
  provider: 'ollama'
});

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// Health check
app.get('/', (req, res) => res.send('OpenClaw Live!'));

// Telegram webhook
app.post('/telegram', (ctx) => bot.handleUpdate(ctx.req, ctx.res));

// Start bot
bot.launch();
app.listen(process.env.PORT || 3000, () => {
  console.log('OpenClaw + Ollama live!');
});
