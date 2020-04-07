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
        if(command === 'cases' && message.member.hasPermission("MANAGE_CHANNELS")){
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv cases`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Cases: ' + importedJSON.cases);
                    message.channel.send("Channel renamed!");
                    try
                    {
                        function ChannelRefresh(){
                            voiceChannel.setName('Cases: ' + importedJSON.cases);
                        }
                        setInterval(ChannelRefresh,10000);
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                 }
            }
        else if(command === 'deaths' && message.member.hasPermission("MANAGE_CHANNELS"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv deaths`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Deaths: ' + importedJSON.deaths);
                    message.channel.send("Channel renamed!");
                    try
                    {
                    function ChannelRefresh(){
                        voiceChannel.setName('Deaths: ' + importedJSON.deaths);
                        }
                    setInterval(ChannelRefresh,10000);
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                }

            }
        else if(command === 'recovered' && message.member.hasPermission("MANAGE_CHANNELS"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv recovered`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Recovered: ' + importedJSON.recovered);
                    message.channel.send("Channel renamed!");
                    try
                    {
                    function ChannelRefresh(){
                        voiceChannel.setName('Recovered: ' + importedJSON.recovered);
                        }
                    setInterval(ChannelRefresh,10000);
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                }

            }
        else if(command === 'active' && message.member.hasPermission("MANAGE_CHANNELS"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv active`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Active: ' + importedJSON.active);
                    message.channel.send("Channel renamed!");
                    try{
                    function ChannelRefresh(){
                        voiceChannel.setName('Active: ' + importedJSON.active);
                        }
                    setInterval(ChannelRefresh,10000);
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                 }
            }
        else if(command === 'countries' && message.member.hasPermission("MANAGE_CHANNELS"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv countries`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Countries: ' + importedJSON.affectedCountries);
                    message.channel.send("Channel renamed!");
                    try
                    {
                    function ChannelRefresh(){
                        voiceChannel.setName('Countries: ' + importedJSON.affectedCountries);
                        }
                    setInterval(ChannelRefresh,10000);
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                }

            }
            else if(command === 'critical' && message.member.hasPermission("MANAGE_CHANNELS"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv critical`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Critical: ' + importedJSON.critical);
                    message.channel.send("Channel renamed!");
                    try
                    {
                    function ChannelRefresh(){
                        voiceChannel.setName('Critical: ' + importedJSON.critical);
                        }
                    setInterval(ChannelRefresh,10000);
                    }
                    catch(err)
                    {
                        console.log(err);
                    }

                }

            }
            else if(command === 'todaycases' && message.member.hasPermission("MANAGE_CHANNELS"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv todaycases`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Todays Cases: ' + importedJSON.todayCases);
                    message.channel.send("Channel renamed!");
                    try
                    {
                    function ChannelRefresh(){
                        voiceChannel.setName('Todays Case: ' + importedJSON.todayCases);
                        }
                    setInterval(ChannelRefresh,10000);  
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                }

            }
            else if(command === 'todaydeaths' && message.member.hasPermission("MANAGE_CHANNELS"))
            {
                if(!message.member.voice.channelID)
                    return message.channel.send("Join a voice channel and enter the command ``!cv todaydeaths`` again! Be sure the bot is able to see the voice channel!");
                else
                {
                    var voiceChannel = message.member.voice.channel;
                    voiceChannel.setName('Todays Deaths: ' + importedJSON.todayDeaths);
                    message.channel.send("Channel");
                    try
                    {
                    function ChannelRefresh(){
                        voiceChannel.setName('Todays Deaths: ' + importedJSON.todayDeaths);
                        }
                    setInterval(ChannelRefresh,10000);
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                }

            }
        else if(command === 'help' && message.member.hasPermission("MANAGE_CHANNELS"))
        {
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('Covid-19 Tracker')
                .setURL('https://discord.js.org/')
                .setAuthor('Bot by shaftAndi#1825', 'https://cdn.discordapp.com/avatars/571412838388727809/52c80f084a56582f9485cd52e43d9e1e.png?size=128')
                .setDescription('Covid-19 Tracker is an easy to use bot that applies the https://corona.lmao.ninja/all JSON to Voice Channels in order to keep you updated on the latest updates!')
                .setThumbnail('https://www.dhs.gov/sites/default/files/images/20_0305_opa_coronavirus-micro.jpg')
                .addFields(
                    { name: 'Commands', value: '- !cv cases\n- !cv active\n- !cv deaths\n- !cv recovered\n- !cv countries\n - !cv critical\n - !cv todaycases\n - !cv todaydeaths' }
                );
            return message.channel.send(helpEmbed);
        }
        else if (message.content.startsWith(`${prefix}`)) {
            message.channel.send("That isn't a valid command, type ``!cv help`` for more info!");
            }

    });
