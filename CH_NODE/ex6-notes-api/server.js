// 練習 6：留言板 API（下週會用 Express 改寫）
// 執行：npm run dev；用 client.html（以 Live Preview 開啟）或 curl 測試
//   curl http://localhost:3000/api/notes
//   curl -X POST -H "Content-Type: application/json" -d "{\"text\":\"hi\"}" http://localhost:3000/api/notes
//   （Windows PowerShell 請打 curl.exe）
import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';

const PORT = process.env.PORT ?? 3000;
const DB = path.join(import.meta.dirname, 'notes.json');

// TODO 1：readNotes()：讀取 notes.json 並 JSON.parse；檔案不存在（ENOENT）時回傳 []
async function readNotes() {
  return [];
}

// TODO 2：readBody(req, limit)：用 for await (const chunk of req) 收集 body，
//         超過 limit（1 MB）時拋出 status 為 413 的錯誤
async function readBody(req, limit = 1e6) {
  return '';
}

const server = http.createServer(async (req, res) => {
  // TODO 3：OPTIONS 任何路徑 → 204，並帶 CORS header：
  //         Access-Control-Allow-Origin / -Allow-Methods / -Allow-Headers
  // TODO 4：GET /api/notes  → 200，回傳所有留言
  // TODO 5：POST /api/notes → body 不是合法 JSON 回 400；text 缺少或只有空白回 400；
  //         成功時新增 { id, text, createdAt }、寫回 notes.json，回 201 與新留言
  // TODO 6：其他 → 404
  // TODO 7：整個處理過程包 try/catch，發生錯誤回 500，伺服器不可以掛掉
  // 提示：所有 JSON 回應都要帶 Access-Control-Allow-Origin，瀏覽器才讀得到

  res.end('TODO');
});

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
