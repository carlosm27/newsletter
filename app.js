import LastEntry  from './rssFeed.js';
import express from 'express';

import cron from 'node-cron';

let rssLink = 'https://carlosmv.hashnode.dev/rss.xml';


const app = express();
const port = 8000;

cron.schedule("*/15 * * * * *", function () {
    console.log("---------------------");
    console.log("running a task every 15 seconds");
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
