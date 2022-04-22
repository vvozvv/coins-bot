const axios = require('axios');
const config = require('../config.json');

const api = axios.create();
api.defaults.headers['X-CMC_PRO_API_KEY'] = config.api_token || '';

module.exports = api