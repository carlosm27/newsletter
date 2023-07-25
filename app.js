const express = require('express');
const cron = require("node-cron");

const app = express();
const port = 8000;

cron.schedule("*/15 * * * * *", function () {
    console.log("---------------------");
    console.log("running a task every 15 seconds");
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
