module.exports = {
    availableCoins: ['BTC', 'SOL', 'MATIC'],
    commands: {
        accessCoin: '!AC',
        avalCoin: availableCoins.join(' | '),
        menu: '!menu',
    },
    commandsList: [
        {name: this.commands.accessCoin, value: 'Access Coins - Доступные для просмотра монеты' },
        {name: this.commandsavalCoin, value: 'Просмотр стоимости монеты' },
        {name: this.commandsmenu, value: 'Просмотр стоимости всех монет' },
    ]
}