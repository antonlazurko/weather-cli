#!/usr/bin/env node
import { getArgs } from './helpers/args.js';

const initCLI = (params) => {
    console.log('Initializing CLI');
<<<<<<< HEAD
    const { help, city, token } = getArgs(process.argv);
    if(help) {
        console.log('Help:>> ', help);
    }
    if(city) {
        console.log('city', city);
    }
    if(token) {
        console.log('token', token);
=======
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
>>>>>>> 48918952ac9d411418c1f02b8e3da29a93734a93
    }
}

initCLI()