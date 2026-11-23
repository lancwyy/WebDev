// 練習 5（進階）：靜態檔案伺服器
// 執行：npm run dev，然後開 http://localhost:3000/
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { pipeline } from 'node:stream/promises';

const PUBLIC_DIR = path.join(import.meta.dirname, 'public');

// TODO 1：補齊副檔名 → Content-Type 對照表（至少 html、css、js、json、png、jpg、svg）
const MIME = {
  '.html': 'text/html; charset=utf-8',
};

const server = http.createServer(async (req, res) => {
  // TODO 2：取出 pathname；'/' 視為 '/index.html'；記得 decodeURIComponent
  // TODO 3：用 path.join(PUBLIC_DIR, ...) 組出檔案路徑
  // TODO 4：安全檢查：組出的路徑必須仍在 PUBLIC_DIR 底下，否則回 403
  //         測試：curl "http://localhost:3000/..%2fsecret.env" 必須拿不到內容
  // TODO 5：用 fs.promises.stat 確認檔案存在且是檔案，不存在回 404
  // TODO 6：設定 Content-Type 與 Content-Length，用 pipeline(fs.createReadStream(檔案), res) 送出

  res.end('TODO');
});

server.listen(3000, () => console.log('http://localhost:3000'));
