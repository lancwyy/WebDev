# CSS 載入順序比較範例

## 目錄說明

- `index.html`：示範頁面
- `01-import-base.css`：第一份被 `<link>` 載入的 CSS；裡面再用 `@import` 載入下一份樣式
- `02-import-theme.css`：第二份被 `@import` 載入的樣式
- `11-link-base.css`：`<link>` 的第一份基礎樣式
- `12-link-theme.css`：`<link>` 的第二份主題樣式

## 開啟方式

1. 在 VS Code 內開啟這個目錄。
2. 用瀏覽器開啟 `index.html`。
3. 打開 DevTools。
4. 依序查看：
   - Network（filter: CSS）
   - Styles / Sources
5. 觀察載入順序：
   - `01-import-base.css` 先透過 `<link>` 載入
   - `01-import-base.css` 再執行 `@import` 讀取 `02-import-theme.css`
   - `11-link-base.css` 與 `12-link-theme.css` 是用兩個 `<link>` 依序載入

## 觀察重點

- 若 `@import` 出現在 HTML 裡的多個 `<style>` 或多個 `@import` 同時出現在同一個檔案裡，瀏覽器可能會做並行／交錯處理，較難觀察明確序列。
- 若第一份 CSS 由 `<link>` 載入，而它再用 `@import` 引入第二份 CSS，則能呈現更明確的序列式下載。
- 檔名前的數字（01、02、11、12）可以幫助你快速判斷順序。
