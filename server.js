const express = require('express');
const { Telegraf } = require('telegraf');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('<h1>OpenClaw Railway Live! 🚀</h1><p>Bot active</p>');
});

// Bot
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);
bot.on('message', (ctx) => {
  ctx.reply(`Agency AI: "${ctx.message.text}" → Leads ready!`);
});

// Webhook + launch
app.use(bot.webhookCallback('/secret-bot-path'));
bot.launch();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 OpenClaw + Bot on ${port}`);
  console.log('Bot token loaded:', !!process.env.TELEGRAM_TOKEN);
});
