import fsPromises from 'node:fs/promises';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

async function writeLargeFile() {
  // 1. Prepare the readable stream
  const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`);
  const readable = Readable.from(data);

  // 2. Open the file asynchronously using the Promises API to get a FileHandle
  // 'w' flag: open file for writing (creates file if it doesn't exist, truncates if it does)
  const fileHandle = await fsPromises.open('large-file.txt', 'w');

  try {
    // 3. Create a writable stream directly from the FileHandle
    const writable = fileHandle.createWriteStream();

    // 4. Pipe the data from readable to writable stream
    await pipeline(readable, writable);
    console.log('Large file written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  } finally {
    // 5. Ensure the FileHandle is closed to prevent resource leaks
    await fileHandle.close();
  }
}

writeLargeFile();