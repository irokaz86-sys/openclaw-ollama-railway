// server.js — Railway ESM Compatible
import express from 'express';
import { Telegraf } from 'telegraf';

const app = express();
app.use(express.json());

const bot = new Telegraf(process.env.TELEGRAM_TOKEN || 'demo');

// Simple Qwen simulation (Ollama later)
bot.on('text', async (ctx) => {
  const message = ctx.message.text;
  const response = `Qwen3.5: Understood "${message}". Agency lead gen ready.`;
  ctx.reply(response);
});

// Health check
app.get('/', (req, res) => res.send('OpenClaw Railway Live!'));
app.use(bot.webhookCallback('/bot'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`OpenClaw on port ${port}`);
});
