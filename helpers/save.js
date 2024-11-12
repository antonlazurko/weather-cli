import { printSuccess, printError } from '../services/log.services.js';
import { saveKeyValue } from '../services/storage.service.js';
import { DICTIONARY } from '../const/dictionary.js';


const saveToken = async token => {
    if (!token) {
        printError('Token is not specified')
        return
    }
    try {
        await saveKeyValue(DICTIONARY.token, token);
        printSuccess('Token saved')
    } catch (error) {
        printError(error)
    }
}

const saveCity = async city => {
    if (!city) {
        printError('City is not specified')
        return
    }
    try {
        await saveKeyValue(DICTIONARY.city, city);
        printSuccess('City saved')
    } catch (error) {
        printError(error)
    }
}

export { saveToken, saveCity }