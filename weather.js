#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.services.js';
import { saveCity, saveToken } from './helpers/save.js';
import { getForecast } from './services/forecast.service.js';

const initCLI = async () => {
    const { help, city, token } = getArgs(process.argv);

    if(help) {
        printHelp();
    }
    if(city) {
        await saveCity(city)
    }
    if(token) {
        await saveToken(token)
    }
    getForecast()
}

initCLI()