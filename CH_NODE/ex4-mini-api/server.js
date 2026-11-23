// 練習 4：迷你 API 伺服器（只能使用 node:http）
// 執行：npm run dev，然後用瀏覽器或 curl -i 測試
import http from 'node:http';

const PORT = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  // TODO 1：用 new URL(req.url, `http://${req.headers.host}`) 取出 pathname 與 searchParams

  // TODO 2：非 GET 的請求 → 405，並帶 Allow: GET header

  // TODO 3：GET /            → 200，HTML <h1>哈囉，Node.js！</h1>（中文不可亂碼）
  // TODO 4：GET /api/time    → 200，JSON { "now": "<ISO 時間>" }
  // TODO 5：GET /api/greet   → 200，JSON { "message": "Hello, <name>" }，沒給 name 時用 Guest
  // TODO 6：GET /old         → 301，Location: /
  // TODO 7：其他路徑         → 404，JSON { "error": "Not Found", "path": "<pathname>" }
  // 提示：Content-Length 要用 Buffer.byteLength()，不能用字串的 .length

  res.end('TODO');
});

// 加分：port 被占用（EADDRINUSE）時印出友善訊息
server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
