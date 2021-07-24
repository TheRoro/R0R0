const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'drink',
    description: 'Random Drink',
    async execute(message, args) {
        const getDrink = async (url) => {
            let response = await axios.get(url)
            return response.data.drinks[0]
        }
        let url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        let DrinkInfo = await getDrink(url)
        console.log(DrinkInfo)
        let name = DrinkInfo.strDrink
        let desc = DrinkInfo.strInstructions
        let category = DrinkInfo.strCategory
        let image = DrinkInfo.strDrinkThumb
        let alcoholic = DrinkInfo.strAlcoholic

        const Embed = new Discord.MessageEmbed()
        .setColor('#57ffe6')
        .setTitle(`${name}`)
        .setURL(`${url}`)
        .setAuthor(`${name}`, image, `${url}`)
        .setDescription(`${desc}`)
        .setThumbnail(`${image}`)
        .addField('Category', `${category}`)
        .addField(`${alcoholic}`, '\u200B')
        
        message.channel.send(Embed);
    }
}
