const chalk = require('chalk');
const fs = require('fs')
const encoding = 'utf-8'

// function loadFile(urlFile) {
//     fs.readFile(urlFile, encoding, (err, text) => {
//         if (err) processError(err)
//         console.log(chalk.green(text))
//     })
// }

// async
function getFile(path) {
    fs.promises.readFile(path, encoding)
    .then((text) => console.log(chalk.green(text))) // response
    .catch((err) => processError(err)) // error
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

// ./files/ // EISDIR
// ./files/text.md // ENOENT
getFile('./files/texto1.md')