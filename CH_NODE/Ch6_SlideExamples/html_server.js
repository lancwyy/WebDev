import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    // Check if the request path is the home page (/)
    if (req.url === '/' || req.url === '/index.html') {
        // Get the absolute path to the HTML file
        const filePath = path.join(__dirname, 'demo_headers.html');

        try {
            // Read the HTML file asynchronously
            const data = await fs.promises.readFile(filePath, 'utf-8');

            // If reading succeeds, set the header to text/html and send the file content
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        } catch (err) {
            // If reading the file fails, return a 500 server error
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Internal server error: unable to read HTML file');
        }
    } else if (req.url === "/json") {
        const data = { message: "Hello JSON" };
        const body = JSON.stringify(data);
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body),
        });
        res.end(body);
    } else {
        // Return 404 for any other missing path
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('404 Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});