const Discord = require('discord.js')
const axios = require('axios')

module.exports = {
    name: 'github',
    description: 'github user info',
    async execute(message, args) {
        if (args.length > 0) {
            username = args[0]
            let getUserInfo = async () => {
                try {
                    let response = await axios.get(`https://api.github.com/users/${username}`)
                    return response.data
                }
                catch (err) {
                    message.channel.send(`Username not found`)
                    return
                }
            }
            let userInfo = await getUserInfo()
            if (!userInfo) {
                return
            }
            const Embed = new Discord.MessageEmbed()
                .setColor('#fafafa')
                .setTitle(`${userInfo.login}`)
                .setURL(`${userInfo.html_url}`)
                .setAuthor(userInfo.name ? `${userInfo.name}` : `${userInfo.login}`, `https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`, userInfo.blog ? `https://${userInfo.blog}` : `${userInfo.html_url}`)
                .setDescription(``)
                .setThumbnail(`${userInfo.avatar_url}`)

            if (userInfo.bio) {
                Embed.addField(`Bio`, `${userInfo.bio}`)
            }
            if (userInfo.location) {
                Embed.addField(`Location`, `${userInfo.location}`)
            }
            if (userInfo.company) {
                Embed.addField(`Company`, `${userInfo.company}`)
            }
            if (userInfo.email) {
                Embed.addField(`E-mail`, `${userInfo.email}`)
            }
            if (userInfo.blog) {
                Embed.addField(`Web`, `${userInfo.blog}`)
            }

            Embed
                .setImage(`${userInfo.avatar_url}`)
                .setTimestamp()
                .setFooter('Data from GitHub API', 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');

            message.channel.send(Embed);
        }
        else {
            message.channel.send(`Username not found`)
        }
    }
}