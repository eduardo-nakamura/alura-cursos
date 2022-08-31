#!/usr/bin/env node
import chalk from 'chalk';
import getFileAsync from './5-commands.js';
import validateURLs from './validate-http.js';

const path = process.argv;

async function processMsg(pathname){
    const result = await getFileAsync(pathname[2])
    if(path[3] === 'validate') {
        console.log(chalk.yellow('Valid Links'), await validateURLs(result))
    } else {
        console.log(chalk.yellow('List of Links'), result)
    }    
}

processMsg(path)
// validateURLs()