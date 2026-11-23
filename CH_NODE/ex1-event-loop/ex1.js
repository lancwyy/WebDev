import fs from 'node:fs';

console.log('A');

setTimeout(() => {
  console.log('B');
  fs.readFile(import.meta.filename, () => {
    console.log('G');
    setTimeout(() => console.log('H'), 0);
    setImmediate(() => console.log('I'));
    Promise.resolve().then(() => console.log('J'));
  });
}, 0);

Promise.resolve().then(() => console.log('C'));

(async () => {
  console.log('D');
  await null;
  console.log('E');
})();

console.log('F');
