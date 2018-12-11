### Aplicación del Clima - Node

Recuerden ejecutar ```npm install``` para instalar las librerías

### Ejemplo de Uso

```
node app -d 'Recife'
```

### Nota importante de funcionamiento

Debe crear una carpeta 'keys' que contenga el archivo 'keys.js' con el siguiente contenido

```
const API_KEY_GOOGLE = 'TU_API_KEY';
const API_KEY_OPEN_WEATHER_MAP = 'TU_API_KEY';

module.exports = {
    API_KEY_GOOGLE,
    API_KEY_OPEN_WEATHER_MAP
}
```

Eso es todo...