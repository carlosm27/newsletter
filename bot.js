import TelegramBot from 'node-telegram-bot-api';

const token = '';
const bot = new TelegramBot(token, {polling: true});




export function SendMsg(articleLink) {
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
      
        
        bot.sendMessage(chatId, articleLink);
      });  
};

console.log("Sending message");

SendMsg(link);