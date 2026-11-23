import fs from 'node:fs/promises';

async function appendToFile() {
    try {
        // Append a timestamped log entry
        const logEntry = `${new Date().toISOString()}: Application started\n`;
        await fs.appendFile('app.log', logEntry, 'utf8');

        console.log('Log entry added');
    } catch (err) {
        console.error('Error appending to file:', err);
    }
}

appendToFile();