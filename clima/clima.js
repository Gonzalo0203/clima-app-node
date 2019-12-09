const axios = require('axios');

const getClima = async(lat, lng) => {

    const temperatura = 273.15;
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7f8266eb35c64e7fe4feb789fbdbe71c`);

    const temperaturaDefault = resp.data.main.temp;

    return parseFloat(temperaturaDefault - temperatura).toFixed(2);

}


module.exports = {
    getClima
}