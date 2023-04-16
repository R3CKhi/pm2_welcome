const { Client, Collection, MessageActionRow, MessageButton } = require('discord.js');
const { getVoiceConnection, joinVoiceChannel } = require("@discordjs/voice");
const fs = require('fs');
const client = (global.bot = new Client({
    fetchAllMembers: true,
    intents: [32767],
    partials: ['CHANNEL', 'MESSAGE', 'REACTION'],
}));

const config = require('./../../config.json');


client.on('ready', async () => {
    const guildID = config.guild.id;
    const guild = client.guilds.cache.get(guildID);
    console.log(guildID)
    const connection = getVoiceConnection(guildID);
    if (connection) return;
    client.user.setPresence({ status: "idle" });
    joinVoiceChannel({
        channelId: config.ses.Kanal4,
        guildId: guildID,
        adapterCreator: guild.voiceAdapterCreator,
        selfDeaf: true
    });

    setInterval(() => {
        const sex = Math.floor(Math.random() * (config.durum.length));
        client.user.setActivity(`${config.durum[sex]}`, {
            type: "PLAYING"
        });
    }, 10000);
});

client
    .login((config.token.bot4))
    .then(() => console.log("Bot Başarıyla Bağlandı!"))
    .catch(() => console.log("[HATA] Bot Bağlanamadı!"));


/*
fs.readdirSync("./commands/").forEach((file) => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
    commands.push(command.data.toJSON());
});  
*/