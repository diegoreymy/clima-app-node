const axios = require('axios');
const keys = require('../keys/keys');

const getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=${keys.API_KEY_GOOGLE}`)

    if (respuesta.data.status === "ZERO_RESULTS") {
        throw new Error(`No se han encontrado resultados para ${direccion}`)
    }

    let location = respuesta.data.results[0];
    let coords = respuesta.data.results[0].geometry.location;

    return {
        direccion: location.formatted_address,
        latitud: coords.lat,
        longitud: coords.lng
    }
}

module.exports = {
    getLugarLatLng
}