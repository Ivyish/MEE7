const Discord = require('discord.js');

const { includes } = require('ffmpeg-static');

const client = new Discord.Client();

/online/
client.once('ready', () => {
    console.log('MEE7 is online!');
  });

const prefix = '!';

var servers = {};

/ needed /
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === 'Game?') {
      msg.reply('@game ping');
    }
  });

/simple command/
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

  

});

///////////////////////////////////////////////




client.login(duck);


