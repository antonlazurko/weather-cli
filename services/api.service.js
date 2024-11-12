// import https from 'https'
import axios from 'axios'

import { getKeyValue } from '../services/storage.service.js'
import { weatherUrl } from '../const/url.js'
import { DICTIONARY } from '../const/dictionary.js'

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}
};

const getWeather = async () => {
    const token = process.env.TOKEN ?? await getKeyValue(DICTIONARY.token)
    const city = process.env.CITY ?? await getKeyValue(DICTIONARY.city)

    if(!city) {
        throw new Error('City is not specified, use -city [city name]')
    }
    if(!token) {
        throw new Error('API key is not specified, use -token [API_KEY]')
    }

    const { data } = await axios.get(`${weatherUrl}?q=${city}&appid=${token}&lang=ru&units=metric`, {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })
    return data

    // ---------- old alternative code----------

    // const url = new URL(weatherUrl)
    // url.searchParams.append('q', city)
    // url.searchParams.append('appid', token)
    // url.searchParams.append('lang', 'en')
    // url.searchParams.append('units', 'metric')

    // https.get(url, res => {
    //     let data = ''
    //     res.on('data', chunk => {
    //         data += chunk
    //     })
    //     res.on('end', () => {
    //         try {
    //             if(res.statusCode === 200) {
    //                 const weather = JSON.parse(data)
    //                 console.log(JSON.stringify(weather))
    //             } else {
    //                 const {message} = JSON.parse(data)
    //                 throw new Error(message)
    //             }
    //         } catch (error) {
    //             console.log(error.message)
    //         }
    //     })
    // })
}

export { getWeather, getIcon }