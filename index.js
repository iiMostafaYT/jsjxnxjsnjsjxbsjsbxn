const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.help , .inv`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
client.on('message', message => {
var prefix = "." // البريفكس
if(message.content.startsWith(prefix +"server")){ // الامر
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
}); 


 client.on('message', message => {
    if (message.content === ('.bot')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**Servers**📚 :', [client.guilds.size], true)
            .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
            .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
            .setFooter(message.author.username, message.author.avatarURL)
    })
}
});



client.on('message', message => {
var prefix = "." // برفكس حقك هني
           if (message.content.startsWith(prefix + "id")) {
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("#707070")
    .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)              
    .setFooter(`${clinet.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                
    .setThumbnail(heg.avatarURL);
    message.channel.send(id)
}       });


client.on('message', dark => {
    
    if (dark.content === "NightBot.") {
        setInterval(function(){
        dark.edit('**N**')    
        dark.edit('**Ni**')    
        dark.edit('**Nig**')
        dark.edit('**Nigh**')
        dark.edit('**Night**')
        dark.edit('**NightB**')
        dark.edit('**NightBo*')
        dark.edit('**NightBot**')
        dark.edit('**NightBot.**')
        }, 1000)
    }
    
})

client.on("message", message => {
    var prefix = "."
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "mcskin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**اكتب اسم السكن الي تبيه**");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });

client.on("message", (message) => {
    if(message.content.startsWith(prefix+"gmail")) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+"@gmail.com",
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
})


client.on('message', message => {
    var prefix = "."// بيرفكس البوت حقك
if (message.content.startsWith(prefix + "uptime")) {//Narox
   let uptime = client.uptime;
//Narox
   let days = 0;//Narox
   let hours = 0;
   let minutes = 0;
   let seconds = 0;//Narox
   let notCompleted = true;

   while (notCompleted) {
//Narox
       if (uptime >= 8.64e+7) {
//Narox
           days++;
           uptime -= 8.64e+7;

       } else if (uptime >= 3.6e+6) {
//Narox
           hours++;
           uptime -= 3.6e+6;

       } else if (uptime >= 60000) {

           minutes++;
           uptime -= 60000;

       } else if (uptime >= 1000) {
           seconds++;
           uptime -= 1000;

       }//Narox//Narox

       if (uptime < 1000)  notCompleted = false;

   }
//Narox
   message.channel.send("**" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "**");
//Narox

}
});



 
var word;
 
client.on("message", async function(msg) {
    if (msg.author.bot) return undefined;
    if (msg.channel.type !== "text") return undefined;
    else {
        var args = msg.content.toLowerCase().split(" ");
        if (args[0].slice(prefix.length) === "clear") {//The code created by @L#7574
            if (isNaN(args[1]) && args[1]) return msg.channel.send("Use numbers man ,_,");
            if (!msg.guild.member(client.user)) return msg.channel.send('Missing manage messages permission!');
            if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You're missing manage messages permission!");
            else {//The code created by @L#7574
                if (args[1] || !args[1]) {
                    await msg.channel.fetchMessages().then(async msgs => {
                        var word;
                        if (msgs.size-1 >= 1) word = "messages";
                        if (msgs.size-1 <= 1) word = "message";
                        if(msgs.size-1 <= 0) return msg.channel.send(`There are no messages to clear!`);
                        if (!args[1]) {
                            if (msgs.size-1 < 100) {
                                await msg.channel.bulkDelete(msgs.size);
                                await msg.channel.send(`I've deleted ${msgs.size-=1} ${word}..`);
                            }
                            else if (msgs.size-1 >= 100) {
                                await msg.delete();
                                await msg.channel.bulkDelete(msgs.size);
                                await msg.channel.send(`I've deleted ${msgs.size-=1} ${word}..`);
                            }
                        }
                        else if (args[1] && args[1] < 100) {
                            if (msgs.size-1 < 100 && args[1] < 100 && args[1] > 0) {
                                await msg.channel.bulkDelete(parseInt(args[1])+1);
                                await msg.channel.send(`I've deleted ${parseInt(args[1]).toFixed()} ${word}..`);
                            }
                            else if (msgs.size-1 >= 100 && args[1] == 100) {
                                await msg.delete();
                                await msg.channel.bulkDelete(msgs.size);
                                await msg.channel.send(`I've deleted ${msgs.size-=1} ${word}`);
                            }
                            else {
                                return msg.channel.send(`Invalid numbers..`);
                            }
                        }
                    });
                }
            }
        }
    }
});//The code created by @L#7574

     
client.on('guildMemberAdd', member => {
  
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
 
  if (!channel) return;

  channel.send(`Welcome to the server, ${member}`);
});



client.on('message', message => {
  if (message.content.startsWith(prefix + 'linkbot')) {
    var mentionned = message.mentions.users.first();
    var mrx;
      if(mentionned){
          var mrx = mentionned; } else {
          var mrx = message.author;
      }
      if(!mentionned.bot) return message.reply("الشخص الذي منشنته ليس بوت");
      if(!mentionned) return message.reply("منشن البوت");
      let alpha = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`Link Bot`)
      .setURL(`https://discordapp.com/oauth2/authorize?client_id=${mrx.id}&scope=bot&permissions=8`)
      .setThumbnail(mrx.avatarURL)
      .setFooter(`- Requested By: ${message.author.tag}`)
      message.channel.sendEmbed(alpha);
  }
});


 client.login(process.env.BOT_TOKEN);
