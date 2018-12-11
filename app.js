const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const keys = require('./keys/keys');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.latitud, coords.longitud)
        return `La temperatura en ${coords.direccion} es de ${temp}C°`
    } catch (error) {
        return `No se encontraron resultados para ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))