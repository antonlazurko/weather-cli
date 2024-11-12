const getArgs = (argv) => {
    const args = {}
    const [executer, file, ...restArgs] = argv
    restArgs.forEach((value, index, array) => {
        if(value.startsWith('-')) {
            if(index === array.length - 1) {
                args[value.substring(1)] = true
            } else if(array[index + 1] && !array[index + 1].startsWith('-')) {
                args[value.substring(1)] = array[index + 1]
            } else {
                args[value.substring(1)] = true
            }
        }
    })
    return args;
}

export { getArgs }