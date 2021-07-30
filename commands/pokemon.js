const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'pokemon',
    description: 'random pokemon',
    async execute(message, args) {
        const getPokeId = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
        const getPokemon = async (url) => {
            let response = await axios.get(url).catch(err => {
                message.channel.send('Pokemon not found :(')
                return err.response.status
            })
            return response.data
        }
        const formatArgs = (args) => {
            return args[0].toLowerCase()
        }

        const formatString = (name) => {
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
        const formatValue = (data) => {
            value = data.toString()
            let formated = ''
            if (value.length >= 2) {
                formated = value.substring(0, value.length - 1) + '.' + value.substring(value.length - 1, value.length)
            }
            else {
                formated = '0.' + value.substring(0, 1)
            }
            return formated
        }

        let pokeId = ''
        let url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`

        if (args.length == 0) {
            pokeId = getPokeId(1, 899)
            url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`
        }
        else {
            pkArgs = formatArgs(args)
            url = `https://pokeapi.co/api/v2/pokemon/${pkArgs}`
        }
        let PokeInfo = await getPokemon(url)
        if (!PokeInfo) {
            return
        }
        PokeInfo = await getPokemon(url)
        pokeId = PokeInfo.id
        let name = formatString(PokeInfo.name)
        let faviconUrl = PokeInfo.sprites.front_default
        let color = "#FAD61D"
        let sprite = PokeInfo.sprites.other['official-artwork'].front_default

        const Embed = new Discord.MessageEmbed()
            .setColor(color)
            .setTitle(`${name}`)
            .setURL(`${url}`)
            .setAuthor(`${pokeId}: ${name}`, faviconUrl, `${url}`)
            .setDescription(``)
            .setThumbnail(`${sprite}`)

        for (let i = 0; i < PokeInfo.types.length; i++) {
            const TypeInfo = PokeInfo.types[i];
            Embed.addField(`Type ${TypeInfo.slot}`, `${formatString(TypeInfo.type.name)}`)
        }

        for (let i = 0; i < PokeInfo.abilities.length; i++) {
            const AbilityInfo = PokeInfo.abilities[i];
            if (!AbilityInfo.is_hidden) {
                Embed.addField(`Ability ${i + 1}`, `${formatString(AbilityInfo.ability.name)}`)
            }
            else {
                Embed.addField(`Hidden Ability`, `${formatString(AbilityInfo.ability.name)}`)
            }
        }

        Embed.addField(`Weight`, `${formatValue(PokeInfo.weight)} kg`)
        Embed.addField(`Height`, `${formatValue(PokeInfo.height)} m`)

        Embed
            .setImage(`${sprite}`)
            .setTimestamp()
            .setFooter('Data from PokeAPI', faviconUrl)

        message.channel.send(Embed)
    }
}
