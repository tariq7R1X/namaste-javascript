
# 🧠 Episode 9: Block Scope & Shadowing – *Namaste JavaScript*

🔗 [Watch on YouTube](https://www.youtube.com/watch?v=lW_erSjyMeM&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=10)

---

## 🔹 1. **What is Block Scope?**

### 🔸 Definition:
A **block** in JavaScript is a code section enclosed within curly braces `{}`.  
Block scope means variables declared inside a block (`{}`) using `let` or `const` **cannot be accessed outside** that block.

```js
{
  let a = 10;
  const b = 20;
}
// console.log(a); // ❌ ReferenceError
```

### 🔸 Important:
- `let` and `const` are block-scoped.
- `var` is **not block-scoped**, it is function/global scoped.

```js
{
  var c = 30;
}
console.log(c); // ✅ Outputs: 30
```

---

## 🔹 2. **Use Case of Block Scope**

### 🔸 Example:
```js
{
  let x = 100;
  console.log(x); // ✅ 100
}
console.log(x); // ❌ ReferenceError
```

### 🔸 Why block scope?
It helps **encapsulate** logic and avoids **accidental variable conflicts**.

---

## 🔹 3. **Shadowing**

### 🔸 Definition:
**Shadowing** occurs when a variable declared in an inner scope **has the same name** as a variable in an outer scope.  
The inner variable "shadows" or **overrides** the outer one in that scope.

### 🔸 Example:
```js
let a = 100;
{
  let a = 200;
  console.log(a); // 🔹 200 (inner shadows outer)
}
console.log(a); // 🔹 100 (outer still intact)
```

---

## 🔹 4. **Illegal Shadowing**

### 🔸 You can shadow `var` with `let`, but not the other way around **inside the same function/block**.

```js
let a = 10;
{
  var a = 20; // ❌ SyntaxError: Identifier 'a' has already been declared
}
```

✅ Valid shadowing:
```js
var b = 10;
{
  let b = 20; // ✅ legal
  console.log(b); // 20
}
```

---

## 🔹 5. **Function Scope vs Block Scope**

### 🔸 `var` is function-scoped:

```js
function test() {
  var x = 1;
  if (true) {
    var x = 2; // same variable
    console.log(x); // 2
  }
  console.log(x); // 2
}
```

### 🔸 `let` and `const` are block-scoped:

```js
function test() {
  let x = 1;
  if (true) {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}
```

---

## 🔹 6. **Scope Chain**

Even when a variable is shadowed, **JS uses lexical scope** to determine which variable to access based on **where the function is defined**, not where it's called.

---

## 🔹 Summary Table

| Feature         | `var`              | `let` / `const`       |
|----------------|--------------------|------------------------|
| Scope Type     | Function scoped    | Block scoped           |
| Redeclaration  | Allowed            | Not allowed in same scope |
| Hoisting       | Yes (undefined)    | Yes (TDZ - ReferenceError if accessed before declaration) |
| Shadowing      | Can shadow `var` with `let` | Cannot shadow `let` with `var` |

---

## 🧠 Key Takeaways

- Use `let` and `const` for better scoping control and to avoid accidental bugs.
- Understand block scoping and shadowing to write cleaner and more maintainable code.
- Avoid using `var` in modern JavaScript—stick to `let` and `const`.
