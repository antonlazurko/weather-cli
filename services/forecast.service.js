
import { printError, printWeather, printSuccess } from './log.services.js';
import { getWeather, getIcon } from './api.service.js';

const getForecast = async () => {
    try {
        const weather = await getWeather()
        printSuccess('Weather received')
        printWeather(weather, getIcon(weather.weather[0].icon));

    } catch (error) {
        if (error?.response?.status === 404) {
            printError(new Error('City not found'))
        } else if (error?.response?.status === 401) {
            printError(new Error('API key is not valid'))
        } else {
            printError(new Error(error))
        }
    }
}
export { getForecast }