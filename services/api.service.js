// import https from 'https'
import axios from 'axios'

import { getKeyValue } from '../services/storage.service.js'
import { weatherUrl } from '../const/url.js'
import { TOKEN_DICTIONARY } from '../const/dictionary.js'

const getWeather = async (city) => {
    if(!city) {
        printHelp()
        return
    }
    // const url = `${weatherUrl}?q=${city}&appid=${process.env.WEATHER_TOKEN}`
    const token = await getKeyValue(TOKEN_DICTIONARY.token)
    if(!token) {
        throw new Error('API key is not initialized, use -token [API_KEY]')
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

export { getWeather }