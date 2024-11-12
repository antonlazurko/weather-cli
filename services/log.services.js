import chalk from "chalk"
import dedent from "dedent-js"

import { getWeatherTemplate } from '../templates/weatherTemplate.js';

const printError = (error) => {
    console.log(dedent`
        ${chalk.bgRed('Error:>> ')}
        ${chalk.bold(error.message)}
    `)
}

const printSuccess = (message) => {
    console.log(dedent`
        ${chalk.bgGreen('Success:>> ')}
        ${chalk.bold.green(message)}
    `)
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bold.bgBlue('Help:>> ')}
        Without parameters - get weather for current location
        -city [CITY] - get weather for specific city
        -token [TOKEN] - get weather for specific token
        -help - print this help`
    )
}

const printWeather = (data, icon) => {
    const template = getWeatherTemplate(data, icon)
    console.log(template);
}

export { printError, printSuccess, printHelp, printWeather }