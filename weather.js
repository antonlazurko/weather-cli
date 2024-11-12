#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = (params) => {
    console.log('Initializing CLI');
    const { help, city, token } = getArgs(process.argv);
    if(help) {
        console.log('Help:>> ', help);
    }
    if(city) {
        console.log('city', city);
    }
    if(token) {
        console.log('token', token);
    }
}

initCLI()