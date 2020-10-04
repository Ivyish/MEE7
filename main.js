const Discord = require('discord.js');

const client = new Discord.Client();

const Magic = '761706090403987496';

const prefix = '!';

const ytdl = require("ytdl-core");

var servers = {};


client.once('ready', () => {
    console.log('MEE7 is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

  if (message.content == '!magic') {
      message.member.roles.add(Magic);
  }

   
     
   

});



client.login('NzYyMDQyMTY4NzU1MjI0NjU2.X3jZEw.EnqaJPT8B3gj4Y98Dqp4nkIkNsY');