// demo-headers.js
import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/html") {
        const body = "<h1>Hello, world!</h1>";
        res.writeHead(200, {
            "Content-Type": "text/html",
            "Content-Length": Buffer.byteLength(body),
        });
        res.end(body);

    } else if (req.url === "/json") {
        const data = { message: "Hello JSON" };
        const body = JSON.stringify(data);
        res.writeHead(200, {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(body),
            "Access-Control-Allow-Origin": "*"
        });
        res.end(body);

    } else if (req.url === "/redirect") {
        res.writeHead(302, {
            Location: "/html",
        });
        res.end();

    } else if (req.url === "/cookie") {
        res.writeHead(200, {
            "Set-Cookie": "user=Ci; HttpOnly; Path=/",
        });
        res.end("Cookie set!");

    } else if (req.url === "/cache") {
        res.writeHead(200, {
            "Cache-Control": "public, max-age=60",
        });
        res.end("Cacheable for 60 seconds.");

    } else if (req.url === "/cors") {
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "*",
        });
        res.end("CORS header set to allow all origins.");

    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
