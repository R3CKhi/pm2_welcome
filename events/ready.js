const client = require("../index");
const { Collection, ActivityType } = require("discord.js")
const fs = require("fs")
const { joinVoiceChannel } = require('@discordjs/voice');


client.on("ready", () => {
    console.log(`${client.user.tag} Bot Online!`)
    client.user.setPresence({
        activities: [{ name: `D ♡ B`, type: ActivityType.Watching }],
        status: 'dnd',
    });
    config = require("./config.json");
    let Guild = client.guilds.cache.get(config.guild.id);
    client.commands = new Collection();
    client.aliases = new Collection();
    fs.readdir("./commands/", (err, files) => {
        if (err) console.error(err);
        console.log(`${files.length} Total Command!`);
        files.forEach(f => {
            let props = require(`../commands/${f}`);

            console.log(`${props.help.name} Named Command Online!`);

            client.commands.set(props.help.name, props);
            props.conf.aliases.forEach(alias => {
                client.aliases.set(alias, props.help.name);
            });
        });
    });

});