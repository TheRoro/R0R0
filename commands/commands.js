const Discord = require('discord.js')

module.exports = {
    name: 'commands',
    description: 'list of commands',
    async execute(message, args) {
        const Embed = new Discord.MessageEmbed()
        .setColor(`#fafafa`)
        .setTitle(`List of commands`)
        .addField(`Random Cat`, `$cat, $gato, $neko, $🐈`)
        .addField(`GitHub Profile Information`, `$github <username>`)
        .addField(`Rick and Morty character`, `$rick, $morty, $geez`)
        .addField(`Random Pokemon`, `$poke, $pokemon, $pkmn or $pk <pkmn name>`)
        .addField(`Random Drink`, `$drink, $cocktail`)
        .addField(`Random Programming Joke`, `$joke, $jokes`)
        .addField(`BITI`, `$biti`)
        message.channel.send(Embed);
    }
}