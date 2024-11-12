import { homedir } from 'os';
import { join } from 'path'
import { promises } from 'fs'

import { printError } from './log.services.js'
import { isExist } from '../helpers/file.js'

const filePath = join(homedir(), 'weather-data.json')

const saveKeyValue = async(key, value) => {
    let data = {}

    if(await isExist(filePath)){
        const file = await promises.readFile(filePath)

        data = JSON.parse(file)
    }

    data[key] = value

    await promises.writeFile(filePath, JSON.stringify(data))
}

const getKeyValue = async (key) => {
    if(await isExist(filePath)){
        const file = await promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

export { saveKeyValue, getKeyValue }