import { readFile, writeFile } from "fs/promises";
import { dirname } from 'path'
import { fileURLToPath } from 'url';
import { spin } from "../utils/spinner.js";


const __dirname = dirname(fileURLToPath(import.meta.url));

export async function create(license: string) {
    await spin()
    let licenseToWrite = await readFile(`${__dirname}/src/create/${license}.md`)
    await writeFile(`${process.cwd()}/LICENSE`, licenseToWrite)
}