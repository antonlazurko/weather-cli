#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = (params) => {
    console.log('Initializing CLI');
    const args = getArgs(process.argv);
    console.log('args :>> ', args);
    if(args.help) {
        console.log('Help');
    }
    if(args.city) {
        console.log('city');
    }
    if(args.token) {
        console.log('token');
    }
}

initCLI()