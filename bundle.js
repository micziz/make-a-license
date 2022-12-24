import { readFile, writeFile } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSpinner } from 'nanospinner';
import inquirer from 'inquirer';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function spin() {
    const spinner = createSpinner('Great choice! 👍 Creating License ⚙️').start();
    await sleep(1500);
    spinner.success();
}

const __dirname = dirname(fileURLToPath(import.meta.url));
async function create(license) {
    await spin();
    let licenseToWrite = await readFile(`${__dirname}/src/create/${license}.md`);
    await writeFile(`${process.cwd()}/LICENSE`, licenseToWrite);
}

const licenses = ['Mit', 'Gpl-3', 'Mpl-2', 'Apache-2', 'Agpl-3'];

async function askLicense() {
    let response = await inquirer.prompt([
        {
            name: 'License',
            type: 'list',
            message: 'What license to create❓',
            choices: licenses
        },
    ]);
    const license = response.License;
    return license;
}

let license = await askLicense();
await create(license);
console.log(`${license} license created! Ready to 🚀!`);
