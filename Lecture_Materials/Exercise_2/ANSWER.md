# Exercise_2 Question: HTML5 Form Validation

**Student Name (姓名):** [Your Name / 你的姓名]  
**Student ID (學號):** [Your Student ID / 你的學號]  

---

## Question: What is the difference between `pattern` and `required`?

### Please explain the functional differences between the `required` and `pattern` attributes in HTML5 form validation in **1 to 3 sentences** (in English or Traditional Chinese).

> **Hints (提示)：**
> 1. What does `required` check for when a user submits a form? (When is it triggered?)
> 2. What does `pattern` check for, and what format rules does it use?
> 3. What happens if an input field has `pattern` specified, but **does NOT** have `required`, and the user leaves it completely blank?

#### Code Example for Test (HTML原始碼範例)

Below is a quick code structure demonstrating how both attributes are applied:

```html
<!-- Example 1: Field cannot be empty -->
<input type="text" name="username" required>

<!-- Example 2: Field must match a 10-digit format if filled -->
<input type="tel" name="phone" pattern="[0-9]{10}">

<!-- Example 3: Field CANNOT be empty AND must match a 10-digit format -->
<input type="tel" name="phone" pattern="[0-9]{10}" required>
```

---

## Your Answer (請在此處寫下你的回答)

<!-- Replace the line below with your own answer / 請將下方這行替換為你的答案 -->

Write your explanation here.