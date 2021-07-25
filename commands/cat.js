const axios = require('axios')

module.exports = {
    name: 'cat',
    description: 'random cat image',
    async execute(message, args) {
        let getCat = async () => {
            let response = await axios.get('https://cataas.com/cat?json=true')
            return response.data
        }
        let catResponse = await getCat()
        catUrl = catResponse.url
        message.channel.send(`https://cataas.com${catUrl}`)
    }
}