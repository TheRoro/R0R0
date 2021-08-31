const axios = require('axios')

module.exports = {
	name: 'crypto',
	description: 'get crypto by name',
	async execute(message, args) {
		if (args.length > 0) {
			let cryptoId = args[0]
			let getCrypto = async (cryptoId) => {
				let response = await axios.get(
					`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`
				)
				return response.data
			}
			try {
				let cryptoResponse = await getCrypto(cryptoId)
				let cryptoValue = cryptoResponse[`${cryptoId}`].usd
				message.channel.send(`${cryptoValue} USD`)
			} catch {
				message.channel.send(`Crypto was not found`)
			}
		} else {
			message.channel.send(`Crypto was not found`)
		}
	},
}
