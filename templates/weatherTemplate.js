import chalk from "chalk"
import dedent from "dedent-js"

export const getWeatherTemplate = (weatherData, icon) => {
    const { weather, clouds, name, sys, wind, main } = weatherData
    const dateSunrise = new Date(sys?.sunrise * 1000 || '').getHours() + ':' + new Date(sys?.sunrise * 1000 || '').getMinutes();
    const dateSunset = new Date(sys?.sunset * 1000 || '').getHours() + ':' + new Date(sys?.sunset * 1000 || '').getMinutes();

    return dedent`
        Country: ${chalk.bgCyan(sys?.country || 'N/A')}
        City: ${chalk.bgGray(name || 'N/A')}
        Weather: ${icon} ${chalk.bgMagenta(weather[0]?.main || 'N/A')} , ${chalk.bgMagenta(weather[0]?.description || 'N/A')}
        Temperature: ${chalk.bgYellow(main?.temp || 'N/A')}
        Wind Speed: ${chalk.bgWhite(wind?.speed || 'N/A')}
        Clouds: ${chalk.bgYellow(clouds?.all || 'N/A')}
        Sunrise: ${chalk.cyan(dateSunrise || 'N/A')}
        Sunset:: ${chalk.grey(dateSunset || 'N/A')}
    `
}