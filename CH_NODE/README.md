# Ch6 Node.js 課堂練習

需要 Node.js 20.11 以上（建議安裝 LTS 版）。本課程一律使用 ES Modules（`import` / `export`），每個資料夾的 package.json 都已設定 `"type": "module"`。每個練習資料夾都可以單獨執行：

```bash
cd ex4-mini-api
npm run dev      # 等於 node --watch server.js，存檔後自動重啟
```

| 練習 | 資料夾 | 時間 | 形式 |
| --- | --- | --- | --- |
| 1. 事件迴圈預測 | `ex1-event-loop` | 8 分 | 個人 |
| 2. CommonJS → ESM 改寫 | `ex2-cjs-to-esm` | 10 分 | 個人 |
| 3. semver 快問快答 | （本檔案） | 5 分 | 全班 |
| 4. 迷你 API 伺服器 | `ex4-mini-api` | 25 分 | 兩人一組 |
| 5. 靜態檔案伺服器（進階） | `ex5-static-server` | 15 分 | 兩人一組 |
| 6. 留言板 API | `ex6-notes-api` | 25 分 | 兩人一組，未完成帶回家 |

---

## 練習 1｜預測輸出順序

打開 `ex1-event-loop/ex1.js`，**先在紙上寫下印出的 10 個字母順序**，再執行 `node ex1.js` 驗證。

想一想：

- `async` 函式裡 `await` 之前的程式，是馬上執行還是等一下才執行？
- Promise 的 `.then` 和 `setTimeout(..., 0)` 誰先？
- 在讀檔完成的 callback 裡，`setImmediate` 和 `setTimeout(..., 0)` 誰先？

## 練習 2｜把 CommonJS 專案改成 ESM

網路上很多舊範例還在用 CommonJS（`require`）。`ex2-cjs-to-esm` 就是這樣的舊程式，目前可以用 `node main.js` 正常執行。請對照投影片的「CommonJS → ESM 翻譯表」把它改成 ESM，且輸出結果不變。

提示：共有 5 個地方要處理：package.json、default export、named export、`__dirname`、import 路徑。

## 練習 3｜semver 快問快答

下列版本範圍是否會裝到括號內的版本？

1. `^1.4.2` → 1.9.0？
2. `^1.4.2` → 2.0.0？
3. `~1.4.2` → 1.4.9？
4. `~1.4.2` → 1.5.0？
5. `^0.3.1` → 0.4.0？
6. `1.4.2` → 1.4.3？
7. 加分題：某套件從 2.3.1 更新成「移除一個舊函式」的版本，新版本號應該是什麼？

## 練習 4｜迷你 API 伺服器

只用 `node:http`，完成 `ex4-mini-api/server.js`：

| 請求 | 應回應 |
| --- | --- |
| `GET /` | 200，HTML `<h1>哈囉，Node.js！</h1>`，中文不可亂碼 |
| `GET /api/time` | 200，JSON `{ "now": "<ISO 時間>" }` |
| `GET /api/greet?name=小明` | 200，JSON `{ "message": "Hello, 小明" }`；沒給 name 時用 `Guest` |
| `GET /old` | 301，導向 `/` |
| 非 GET 的任何請求 | 405，並帶 `Allow: GET` header |
| 其他路徑 | 404，JSON `{ "error": "Not Found", "path": "..." }` |

驗收：

- [ ] `/api/greet?name=小明&x=1` 仍能正確回應（不能直接比對 `req.url`）
- [ ] JSON 回應的 `Content-Length` 正確（中文不被截斷）
- [ ] 用 `curl -i` 或 DevTools 截圖 `/old` 與 405 的回應 header
- [ ] 加分：port 被占用時印出友善訊息，而不是一大串 stack trace

## 練習 5｜靜態檔案伺服器（進階）

完成 `ex5-static-server/server.js`，並自行在 `public/` 再放一張圖片：

- `GET /` 回傳 `public/index.html`；`GET /style.css` 等回傳對應檔案
- 依副檔名設定正確的 `Content-Type`（至少 html、css、js、json、png、jpg、svg）
- 使用 stream 送出檔案，不要用 `readFile`
- 檔案不存在回 404
- **安全要求**：`curl "http://localhost:3000/..%2fsecret.env"` 必須**拿不到** `secret.env` 的內容

## 練習 6｜留言板 API（下週用 Express 改寫）

完成 `ex6-notes-api/server.js`，資料存在同目錄的 `notes.json`：

| 請求 | 行為 |
| --- | --- |
| `GET /api/notes` | 200，回傳所有留言陣列；`notes.json` 不存在時回 `[]` |
| `POST /api/notes`，body `{ "text": "..." }` | 201，回傳新留言 `{ id, text, createdAt }` 並寫入檔案 |
| body 不是合法 JSON | 400 `{ "error": "..." }` |
| `text` 缺少或只有空白 | 400 |
| body 超過 1 MB | 413 |
| `OPTIONS` 任何路徑 | 204 加 CORS header |
| 伺服器內部錯誤 | 500，伺服器**不可以掛掉** |

驗收：完成 `client.html` 的 TODO，用 VS Code Live Preview 開啟，能成功新增並列出留言。

討論題：兩個人幾乎同時 POST 會發生什麼事？用 `Date.now()` 當 id 有什麼風險？

---

## 出場小測

1. 為什麼在請求處理函式裡不該用 `fs.readFileSync`？
2. 同一個網址，為什麼 `curl` 拿得到、瀏覽器的 `fetch` 卻被擋？
3. 今天寫的程式裡，哪一段你最希望「有人幫我寫好」？

## 回家作業

- [ ] 完成練習 6，並加上 `DELETE /api/notes/:id`（路徑參數要自己從 pathname 切出），成功回 204、找不到回 404
- [ ] 推上 GitHub：附 `.gitignore`（含 `node_modules/`、`.env`、`notes.json`）與 README，寫明如何執行及每個 API 的 curl 範例
- [ ] 在 README 用 3–5 句話回答：你的程式中哪些部分是「業務邏輯」、哪些是「重複的基礎建設」？
