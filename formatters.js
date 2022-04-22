function priceFormatter(value) {
  if (isNaN(Number(value))) {
    return String(value)
  }
  let priceSep;
  /*
   * В переменной price приводим получаемую переменную в нужный вид:
   * 1. принудительно приводим тип в число с плавающей точкой,
   *    учли результат 'NAN' то по умолчанию 0
   * 2. фиксируем, что после точки только в сотых долях
   */
  const price = typeof value === 'string' ?  Number.prototype.toFixed.call(parseFloat(value) || 0, 2) : value.toFixed(0);

  // заменяем точку на запятую
  priceSep = price.replace(/(\D)/g, ',');
  // добавляем пробел как разделитель в целых
  priceSep = priceSep.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

  return `${priceSep} ₽`;
}

module.exports.priceFormatter = priceFormatter;