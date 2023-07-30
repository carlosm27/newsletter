import LastEntry  from './rssFeed.js';
import express from 'express';
import cron from 'node-cron';
import TelegramBot from 'node-telegram-bot-api';



const app = express();
const port = 8000;

const rssLink = 'https://carlosmv.hashnode.dev/rss.xml';


const token = '';
const bot = new TelegramBot(token, {polling: true});

cron.schedule("0 0 13 * * 1", async function() {
    console.log("---------------------");
    console.log("Retrieving the last update");
    let lastEntry = await LastEntry(rssLink);
    console.log("Sending the last article");
    //console.log(`${lastEntry}`);
    bot.sendMessage(-1001780163243,lastEntry)

  });


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/feed',async  (req, res) => {
  let lastEntry = await LastEntry(rssLink)
  res.send(lastEntry)
})



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
