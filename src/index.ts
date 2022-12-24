import { create } from './create/licenses.js';
import { askLicense } from './utils/askLicense.js';

let license = await askLicense()

await create(license)
console.log(`${license} license created! Ready to 🚀!`)

