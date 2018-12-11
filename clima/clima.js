const axios = require('axios');
const keys = require('../keys/keys');

const getClima = async(lat, lng) => {
    let respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${keys.API_KEY_OPEN_WEATHER_MAP}&units=metric`);
    return respuesta.data.main.temp
}

module.exports = {
    getClima
}