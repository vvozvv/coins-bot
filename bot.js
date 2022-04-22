const { Client, Intents, MessageEmbed } = require('discord.js');
const config = require('./config.json');
config.cfg.intents = new Intents(config.cfg.intents)
const bot = new Client(config.cfg);
const {fetchCurrency, fetchAllCoins} = require('./api/requests')
const {availableCoins, commandsList} = require('./constaints')

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.slice(0, config.prefix.length) !== config.prefix) return;
  const messageArray = message.content.split(' ')
  const commans = messageArray[0].replace(config.prefix, '')

  if (commans === 'help') {
    const exampleEmbed = new MessageEmbed()
      .setColor('#f7931a')
      .setTitle(`Команды`)
      .addFields([...commandsList]);

    message.channel.send({ embeds: [exampleEmbed] })
  }

  if (commans === 'menu') {
    const aee = await fetchAllCoins();

    const exampleEmbed = new MessageEmbed()
      .setColor('#f7931a')
      .setTitle(`Курсы монет`)
      .addFields([...aee]);

    message.channel.send({ embeds: [exampleEmbed] })
  }

  if (commans === 'ac') {
    const exampleEmbed = new MessageEmbed()
      .setColor('#f7931a')
      .setTitle(`Доступные для просмотра монеты: ${availableCoins.join(', ')}`)

    message.channel.send({ embeds: [exampleEmbed] })
  }

  if (commans === 'BTC') {
    const { name, price } = await fetchCurrency('BTC')

    const exampleEmbed = new MessageEmbed()
      .setColor('#f7931a')
      .setTitle(`Цена на ${name} цена в рублях`)
      .setDescription(`${price}`);

    message.channel.send({ embeds: [exampleEmbed] })
  }

  if (commans === 'BTC USD') {
    const { name, price } = await fetchCurrency('BTC', 'USD')

    const exampleEmbed = new MessageEmbed()
      .setColor('#f7931a')
      .setTitle(`Цена на ${name} цена в долларах`)
      .setDescription(`${price}`);

    message.channel.send({ embeds: [exampleEmbed] })
  }

})


bot.login(config.token);