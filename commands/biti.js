module.exports = {
    name: 'biti',
    description: 'biti',
    async execute(message, args) {
        let answers = ['BITI', 'BT', 'BEETEE', 'The Beetees', 'PITI', '????', 'þiti', '🐝☕', 'biti', 'FRICCIÓN', 'piti', ':b: :regional_indicator_t: ', ':eggplant: ', 'BITI S', 'Rafitipiti', 'BINGA', 'beteh', ':nauseated_face: ', ':clown: ', 'BITI!!!!!!!!', 'BEEEEETEEEEEHHH!!!!!', 'AAAAAAAAA', 'lgBT', 'biti biti biti biti biti', 'NO', 'YA ME HARTÉ', 'F', 'merme', 'biticleta', 'biti biti bamba', 'rafitipinga', 'https://avatars.githubusercontent.com/u/50728246?v=4', 'Internal Server Error :woozy_face: ', 'Bitiquin', 'ADIÓS', 'NOOOOOOOOO', 'Seeeeeh']
        const getId = (min, max) => {
            return Math.floor(Math.random() * (max - min)) + min
        }
        const getAnswer = () => {
            return answers[getId(0, answers.length - 1)]
        }
        let answer =  getAnswer()
        message.channel.send(answer)
    }
}