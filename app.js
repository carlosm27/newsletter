import LastEntry  from './rssFeed.js';
import express from 'express';
//import { SendMsg } from './bot.js';
import cron from 'node-cron';

let rssLink = 'https://carlosmv.hashnode.dev/rss.xml';
import TelegramBot from 'node-telegram-bot-api';

const token = '';
const bot = new TelegramBot(token, {polling: true});

const app = express();
const port = 8000;

cron.schedule("*/15 * * * * *", async function() {
    console.log("---------------------");
    console.log("Retrieving the last update");
    let lastEntry = await LastEntry(rssLink);
    console.log("Sending the last article");
    console.log(`${lastEntry}`);
    bot.sendMessage(-1001536419617,lastEntry)

  });


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/feed',async  (req, res) => {
  let lastEntry = await LastEntry(rssLink)
  res.send(lastEntry)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
