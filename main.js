const Discord = require('discord.js')

const client = new Discord.Client()

const prefix = '$'

const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))

for(const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('R0R0 is online')
})

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return
    }
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
    if(command === 'joke' || command === 'jokes') {
        await client.commands.get('joke').execute(message, args)
    }
    else if(command === 'github') {
        await client.commands.get('github').execute(message, args)
    }
    else if(command === "cat" || command === "neko" || command === "gato" || command === "🐈") {
        await client.commands.get('cat').execute(message, args)
    }
    else if(command === "rick" || command === "morty" || command === "geez") {
        await client.commands.get('rick_and_morty').execute(message, args)
    }
    else if(command === "pokemon" || command === "poke" || command === "pkmn" || command === "pk") {
        await client.commands.get('pokemon').execute(message, args)
    }
    else if(command === "command" || command === "commands" || command === "commandList" || command === "commandList") {
        client.commands.get('commands').execute(message, args)
    }
    else if(command === "drink" || command === "cocktail"){
        client.commands.get('drink').execute(message, args)
    } 
    else if(command === "biti"){
        client.commands.get('biti').execute(message, args)
    }
})

client.login('ODQyOTY5NDIyMjM0NjQ4NTk4.YJ9Ccw.hfReGXxnPi-8DEN_A9Gfygr0bLA')
