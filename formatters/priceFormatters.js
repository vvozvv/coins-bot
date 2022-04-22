const priceFormatter = (value) => {
    if (isNaN(Number(value))) {
      return String(value)
    }
    let priceSep;
    
    const price = typeof value === 'string' ?  Number.prototype.toFixed.call(parseFloat(value) || 0, 2) : value.toFixed(0);
  
    // заменяем точку на запятую
    priceSep = price.replace(/(\D)/g, ',');
    priceSep = priceSep.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
  
    return `${priceSep} ₽`;
};

module.exports = priceFormatter;