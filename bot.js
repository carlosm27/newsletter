import TelegramBot from 'node-telegram-bot-api';

const token = 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, {polling: true});

export function SendMsg(articleLink) {
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
      
        
        bot.sendMessage(chatId, articleLink);
      });  
};