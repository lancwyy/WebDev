# CSS combinator selector 示範

這個範例展示四種常見的 CSS 組合選擇器：

- `selector1 selector2`：後代選擇器
- `selector1 > selector2`：子選擇器
- `former_element ~ target_element`：一般兄弟選擇器
- `former_element + target_element`：緊鄰兄弟選擇器

## 開啟方式

1. 打開 `index.html`
2. 使用瀏覽器查看效果
3. 可在 DevTools 中檢查哪些元素被選中

## 觀察重點

- 後代選擇器會選到所有內層符合條件的元素
- 子選擇器只選擇直接孩子，較嚴格
- 一般兄弟選擇器會選到同層後面的所有元素
- 緊鄰兄弟選擇器只選擇緊跟在後面的那一個元素
