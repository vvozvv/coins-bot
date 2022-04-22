/**
 * Fetch from the Weather API endpoint
 * @param {string} city - City to be fetched
 */
 const fetchData = async (city) => {
    const { data } = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
  
    return data;
  };