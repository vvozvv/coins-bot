const api = require('../api/api');
const priceFormatter = require('../formatters/priceFormatters');
const {availableCoins} = require('../constaints');

module.exports = {
    fetchCurrency: async (coin, currency = 'RUB') => {
        const { data } = await api.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${coin}&convert=${currency}`);
          
        const { name, quote } = data?.data[coin];
        const price = priceFormatter(quote[currency].price);
      
        return { name, quote, price }
      },
      
      fetchAllCoins: async (currency = 'RUB') => {
        const { data } = await api.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${availableCoins.join(',')}&convert=${currency}`);
          
        const listArray = Object.entries(data.data).map(([key, val]) => {
          const { name, symbol, quote } = val;
          const price = priceFormatter(quote[currency].price)
          return { name: `${name} "${symbol}"`, value: price, inline: true }
        })
      
        return listArray;
    }
}