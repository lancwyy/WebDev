import http from "http";

const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    // Get different parts of the URL
    const pathname = parsedUrl.pathname; // The path without query string
    
    // Get the query parameters as a regular object
    const query = Object.fromEntries(parsedUrl.searchParams);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        pathname,
        query,
        fullUrl: req.url
    }, null, 2));
});

server.listen(3000);