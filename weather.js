#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.services.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async token => {
    try {
        await saveKeyValue('token', token);
        printSuccess('Token saved')
    } catch (error) {
        printError(error)
    }
}

const initCLI = () => {
    const { help, city, token } = getArgs(process.argv);
    if(help) {
        printHelp(help);
    }
    if(city) {
        printSuccess('city', city);
    }
    if(token) {
        return saveToken(token)
    }
}

initCLI()