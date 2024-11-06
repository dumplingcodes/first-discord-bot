//initialize dotenv
require('dotenv').config();

//explicitly define client intents
const { Client, GatewayIntentBits} = require('discord.js');
const client = new Client( {intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on('ready', ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
});
  
//log in bot
client.login(process.env.CLIENT_TOKEN);

client.on('messageCreate', msg => {
    // You can view the msg object here with console.log(msg)
     if (msg.content === 'Hello') {
       msg.reply( { content: `Hello ${msg.author.username}`});
       //msg.reply({ content: 'pong'})
     }
    });
