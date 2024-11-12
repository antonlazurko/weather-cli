#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.services.js';
import { saveKeyValue } from './services/storage.service.js';
import { getWeather } from './services/api.service.js';
import { TOKEN_DICTIONARY } from './const/dictionary.js';

const saveToken = async token => {
    if(!token.length) {
        printError(new Error('Token is not specified'))
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);
        printSuccess('Token saved')
    } catch (error) {
        printError(error)
    }
}

const initCLI = () => {
    const { help, city, token } = getArgs(process.argv);
    console.log(process.env);

    if(help) {
        printHelp(help);    }
    if(city) {
        printSuccess('city', city);
    }
    if(token) {
        return saveToken(token)
    }
    getWeather(city)
}

initCLI()