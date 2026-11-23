const fs = require('node:fs');
// blocks here until file is read
const data = fs.readFileSync('/file.md'); 
console.log(data);
moreWork(); // will run after console.log

const fs = require('node:fs');
fs.readFile('/file.md', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});
moreWork(); // will run before console.log




// --- math.js (Export) ---
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

module.exports = { add, multiply };


// --- main.js (Matching Import Options) ---
// Option A: Object Import
const math = require('./math.js');
console.log(math.add(2, 3));

// Option B: Destructured Import
const { add, multiply } = require('./math.js');
console.log(add(2, 3));



// --- Logger.js (Export) ---
class Logger {
  log(msg) { console.log(msg); }
}

// Overrides the entire export interface with the class itself
module.exports = Logger;

// --- main.js (Matching Import) ---
const Logger = require('./Logger.js'); // Directly retrieves the class
const logger = new Logger();
logger.log('Hello');


// --- config.js (Export) ---
module.exports = { env: 'production' };

// --- main.js (Matching Import) ---
if (needConfig) {
  // CommonJS require() can be called anywhere at runtime
  const config = require('./config.js');
  console.log(config.env);
}



// --- math.js (Export Options) ---

// Option A: Inline Named Exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }

// Option B: Clause Named Export
function multiply(a, b) { return a * b; }
export { multiply };



// --- main.js (Matching Import Options) ---

// Option A: Specific Named Import
import { PI, add, multiply } from './math.js';

// Option B: Renamed Import (Alias)
import { multiply as mult } from './math.js';

// Option C: Namespace Import (Bundles all named exports into one object)
import * as MathUtils from './math.js';
console.log(MathUtils.PI);


// --- Logger.js (Export) ---
export default function log(message) {
  console.log(`[LOG]: ${message}`);
}


// --- main.js (Matching Import) ---
// No curly braces! You can name it whatever you like (e.g., customLogger)
import customLogger from './Logger.js';

customLogger('System initialized');



// --- analytics.js (Export) ---
export const VERSION = '2.0'; // Named

export default function track(event) { // Default
  console.log(`Event: ${event}`);
}


// --- main.js (Matching Import) ---
// Default import FIRST, followed by named imports inside {}
import track, { VERSION } from './analytics.js';

track('Page View');
console.log(VERSION);


// --- helper.js (Export) ---
export function renderUI() { /* ... */ }
export default class UIEngine { /* ... */ }


// --- main.js (Matching Import) ---
async function loadModule() {
  // Dynamic import returns a Promise
  const helper = await import('./helper.js');
  
  // Accessing named export
  helper.renderUI();
  
  // Accessing default export via the '.default' property
  const Engine = helper.default;
  const ui = new Engine();
}


Add a script in package.json and execute by `npm run start`
{
  "scripts": {
    "start": "nodemon server.js"
  }
}



// Import the HTTP module
import http from 'http';

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as 'Hello, World!'
  res.end('Hello, World!\n');
});

// Define the port to listen on const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, 'localhost', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});