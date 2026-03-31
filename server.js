import express from 'express';
import { Telegraf } from 'telegraf';
import { OpenClaw } from 'openclaw';
import ollama from 'ollama';

const app = express();
app.use(express.json());

const claw = new OpenClaw({
  model: process.env.MODEL || 'qwen3.5:9b',
  provider: 'ollama'
});

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// Health check
app.get('/', (req, res) => res.send('OpenClaw Live ESM!'));

// Telegram webhook  
app.use(bot.webhookCallback('/webhook'));

bot.launch();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`OpenClaw ESM on port ${port}`);
});
