#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp } from './services/log.services.js';


const initCLI = () => {
    console.log('Initializing CLI');
    const { help, city, token } = getArgs(process.argv);
    if(help) {
        printHelp(help);
    }
    if(city) {
        console.log('city', city);
    }
    if(token) {
        console.log('token', token);
    }
}

initCLI()