import { sleep } from "./sleep.js"
import { createSpinner } from 'nanospinner'

export async function spin() {
    const spinner = createSpinner('Great choice! 👍 Creating License ⚙️').start()
    await sleep(1500)
    spinner.success()
}