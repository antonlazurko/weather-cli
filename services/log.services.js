import chalk from "chalk"
import dedent from "dedent-js"

const printError = (error) => {
    console.log(dedent`
        ${chalk.bgRed('Error:>> ')}
        ${chalk.bold(error.message)}
    `)
}

const printSuccess = (message) => {
    console.log(dedent`
        ${chalk.bgGreen('Success:>> ')}
        ${chalk.bold(.message)}
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

export { printError, printSuccess, printHelp }