const axios = require('axios')

module.exports = {
    name: 'joke',
    description: 'programming jokes',
    async execute(message, args) {
        const getJoke = async () => {
            let response = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random')
            return response.data
        }
        let jokeValue = await getJoke()
        message.channel.send(`Here's your joke: \n${JSON.stringify(jokeValue[0].setup)}\n${jokeValue[0].punchline}`)
    }
}