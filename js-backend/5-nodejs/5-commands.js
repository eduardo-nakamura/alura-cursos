import chalk from 'chalk';
import fs from 'fs';
import path from 'path';


export default async function getFileAsync(pathName) {
    const absolutePath = path.join("__dirname", '..', pathName);
    const encoding = 'utf-8'
    try {
        const text = await fs.promises.readFile(pathName, encoding)
        return extractUrl(text);
        // const files = await fs.promises.readdir(absolutePath, { encoding })
        // const result = await Promise.all(files.map(async (file) => {
        //     const localFile = `${absolutePath}/${file}`
        //     const text = await fs.promises.readFile(localFile, encoding)
        //     return extractUrl(text)
        // }))
      
        // return result;
    } catch (error) {
        return processError(error)
    } finally {

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

function extractUrl(text) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const linksArray = []
    let temp
    while ((temp = regex.exec(text)) !== null) {
        linksArray.push({ [temp[1]]: temp[2] })
        temp++
    }
    return linksArray.length === 0 ? 'Links not found' : linksArray
}


// getFileAsync('./files/texto1.md')
