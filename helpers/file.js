import { promises } from 'fs';

const isExist = async (path) => {
    try {
        await promises.stat(path)
        return true
    } catch (_) {
        return false
    }
}

export { isExist }