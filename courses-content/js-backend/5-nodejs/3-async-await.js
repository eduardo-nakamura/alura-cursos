const chalk = require('chalk');
const fs = require('fs')
const encoding = 'utf-8'

async function getFileAsync(path) {    
    try {
        const text = await fs.promises.readFile(path, encoding)
        console.log(chalk.green(text))
    } catch (error) {
        processError(error)
    } finally {
        console.log(chalk.yellow('Function Executed'));
    }
    // console.log(chalk.green(text))
}

function processError(err) {
    let errMsg = ''
    switch (err.code) {
        case 'EISDIR':
            errMsg = "Only path is defined"
            break;
        case 'ENOENT':
            errMsg = "File not found"
            break;
        default:
            break;
    }
    throw new Error(chalk.red(err.code, errMsg));
}


// getFileAsync('./files/texto1.md')
module.exports = getFileAsync