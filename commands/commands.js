const Discord = require('discord.js')

module.exports = {
    name: 'commands',
    description: 'list of commands',
    async execute(message, args) {
        const Embed = new Discord.MessageEmbed()
            .setColor(`#fafafa`)
            .setTitle(`List of commands`)
            .addField(`Random Cat`, `$cat, $gato, $neko, $🐈, $c`)
            .addField(`GitHub Profile Information`, `$github, $g <username>`)
            .addField(`Rick and Morty character`, `$rick, $morty, $geez, $r`)
            .addField(`Random Pokemon`, `$poke, $pokemon, $pkmn, $pk or $p <pkmn name>`)
            .addField(`Random Drink`, `$drink, $cocktail, $d`)
            .addField(`Random Programming Joke`, `$joke, $jokes, $j`)
            .addField(`BITI`, `$biti, $b`)
        message.channel.send(Embed);
    }
}