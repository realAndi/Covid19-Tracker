const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
var request = require("request");
var importedJSON;

function intervalFunc() {
    console.log("I just updated!");
    request('https://corona.lmao.ninja/all', function (error, response, body) {
        if (!error && response.statusCode == 200) {
    importedJSON = JSON.parse(body);
     console.log("Current parsesd JSON\n" + body);
          }
        })
     }
    setInterval(intervalFunc,10000);

client.login(token);


client.once('ready', () => {
    console.log('Ready!');
    client.user.setActivity("COVID-19 Stats", { type: "WATCHING"});
});

client.on("message", (message) => {
    
        const args = message.content.slice(prefix.length).split(' ');
        const command = args.shift().toLowerCase();
        if(command === 'cases' && message.member.hasPermission("ADMINISTRATOR")){
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv cases`` again!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Cases: ' + importedJSON.cases);
                    function ChannelRefresh(){
                        voiceChannel.setName('Cases: ' + importedJSON.cases);
                    }
                    setInterval(ChannelRefresh,10000);
                }

            }
        else if(command === 'deaths' && message.member.hasPermission("ADMINISTRATOR"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv deaths`` again!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Deaths: ' + importedJSON.deaths);
                    function ChannelRefresh(){
                        voiceChannel.setName('Deaths: ' + importedJSON.deaths);
                    }
                    setInterval(ChannelRefresh,10000);
                }

            }
        else if(command === 'recovered' && message.member.hasPermission("ADMINISTRATOR"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv recovered`` again!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Recovered: ' + importedJSON.recovered);
                    function ChannelRefresh(){
                        voiceChannel.setName('Recovered: ' + importedJSON.recovered);
                    }
                    setInterval(ChannelRefresh,10000);
                }

            }
        else if(command === 'active' && message.member.hasPermission("ADMINISTRATOR"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv active`` again!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Active: ' + importedJSON.active);
                    function ChannelRefresh(){
                        voiceChannel.setName('Active: ' + importedJSON.active);
                    }
                    setInterval(ChannelRefresh,10000);
                }

            }
        else if(command === 'countries' && message.member.hasPermission("ADMINISTRATOR"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv countries`` again!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Countries: ' + importedJSON.affectedCountries);
                    function ChannelRefresh(){
                        voiceChannel.setName('Countries: ' + importedJSON.affectedCountries);
                    }
                    setInterval(ChannelRefresh,10000);
                }

            }
        else if(command === 'help' && message.member.hasPermission("ADMINISTRATOR"))
        {
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Covid-19 Tracker')
                .setURL('https://discord.js.org/')
                .setAuthor('Bot by shaftAndi#1825', 'https://cdn.discordapp.com/avatars/571412838388727809/52c80f084a56582f9485cd52e43d9e1e.png?size=128')
                .setDescription('Covid-19 Tracker is an easy to use bot that applies the https://corona.lmao.ninja/all JSON to Voice Channels in order to keep you updated on the latest updates!')
                .setThumbnail('https://www.dhs.gov/sites/default/files/images/20_0305_opa_coronavirus-micro.jpg')
                .addFields(
                    { name: 'Commands', value: '- !cv cases\n- !cv active\n- !cv deaths\n- !cv recovered\n- !cv countries' }
                );
            return message.channel.send(helpEmbed);
        }
        else if (message.content.startsWith(`${prefix}`)) {
            message.channel.send("That isn't a valid command, please try again!");
            }

    });