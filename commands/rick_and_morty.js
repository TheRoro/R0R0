const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'rick_and_morty',
    description: 'random rick and morty character',
    async execute(message, args) {
        const getCharacterId = (min, max) => Math.floor(Math.random() * (max - min)) + min;
        charId = getCharacterId(1, 672)
        let getCharacter = async () => {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
            return response.data
        }
        let charInfo = await getCharacter()
        let faviconUrl = "https://rickandmortyapi.com/favicon-32x32.png?v=1538abef51e33ef514e8fe1ab9aeab4e"
        let color = "#fafafa"
        if(charInfo.status === "Dead") {
            color = "#ff4f61"
        }
        else if(charInfo.status === "Alive") {
            color = "#80ff8a"
        }

        const Embed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle(`${charInfo.name}`)
        .setURL(`${charInfo.url}`)
        .setAuthor(`${charInfo.name}`, faviconUrl, `${charInfo.url}`)
        .setDescription(``)
        .setThumbnail(`${charInfo.image}`)
        .addField(`Status`, `${charInfo.status}`)
        .addField(`Species`, `${charInfo.species}`)
        
        if(charInfo.type.length > 0) {
            Embed.addField(`Type`, `${charInfo.type}`)
        }
        else {
            Embed.addField(`Type`, `Unknown`)
        }

        Embed.addField(`Gender`, `${charInfo.gender}`)

        Embed
        .setImage(`${charInfo.image}`)
        .setTimestamp()
        .setFooter('Data from Rick And Morty API', faviconUrl);

        message.channel.send(Embed);
    }
}