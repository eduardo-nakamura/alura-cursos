const chalk = require('chalk');
const fs = require('fs')
const encoding = 'utf-8'
const textVar = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)"

async function getFileAsync(path) {    
    try {
        const text = await fs.promises.readFile(path, encoding)   
        extractUrl(text)
    } catch (error) {
        processError(error)
    } finally {
        console.log(chalk.yellow('Function Executed'));
    }

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

function extractUrl(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const linksArray = []
    let temp
    while ((temp = regex.exec(text)) !== null) {
        linksArray.push({ [temp[1]]: temp[2]})
        temp++
    }  
    return linksArray
}

getFileAsync('./files/texto1.md')
