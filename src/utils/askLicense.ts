import inquirer from 'inquirer'
import { licenses } from './licenses.js';

export async function askLicense() {
    let response = await inquirer.prompt([
        {
            name: 'License',
            type: 'list',
            message: 'What license to create❓',
            choices: licenses 
        },
    ])
    const license = response.License;
    return license;
}