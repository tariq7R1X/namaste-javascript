
# 📘 Namaste JavaScript Ep. 6 – `undefined` vs `not defined`

Covered by: **Akshay Saini**  
Topic: Understanding the difference between `undefined` and `not defined` in JavaScript  

---

## 🧠 Key Concepts

### 🔹 `undefined` (Technical Definition)

> A variable is **declared** but **not initialized** (no value assigned).  
JavaScript automatically assigns `undefined` to such variables during the **Memory Creation Phase**.

#### ✅ Example:
```js
let a;
console.log(a); // undefined
```

#### ✅ Interview Scenario:
**Q:** What is the value of a declared but uninitialized variable?  
**A:** JavaScript assigns it the value `undefined`.

---

### 🔸 `not defined` (Technical Definition)

> A variable that was **never declared** in any scope.  
Trying to access it results in a **ReferenceError**.

#### ❌ Example:
```js
console.log(b); // ReferenceError: b is not defined
```

#### 🧪 Interview Scenario:
**Q:** What is the difference between `undefined` and `not defined`?  
**A:**
- `undefined` → Variable is declared but no value is assigned
- `not defined` → Variable was never declared

---

## 🔁 Execution Context Recap

JavaScript runs code in two phases:

1. **Memory Creation Phase**
   - Variables are declared and initialized to `undefined`
   - Function declarations are stored in memory

2. **Code Execution Phase**
   - Code is executed line-by-line
   - Values are assigned and logic is executed

#### Example:
```js
console.log(x); // undefined
var x = 10;
```

---

## 💥 Real-Life Analogy

Imagine a **mailbox**:

| State | Meaning |
|-------|---------|
| Mailbox exists but empty | `undefined` |
| Mailbox doesn’t exist at all | `not defined` (ReferenceError) |

---

## 👩‍💻 Safe Usage Example

```js
if (typeof y !== "undefined") {
  console.log("y is declared");
}
```

- ✅ This works safely even if `y` is not declared, because `typeof` avoids ReferenceError.

---

## 📝 Interview Keywords

| Term | Description |
|------|-------------|
| **Hoisting** | Declarations are moved to the top of scope during memory phase |
| **Execution Context** | Environment in which JS is executed (global/function) |
| **ReferenceError** | Error thrown when accessing an undeclared variable |
| **Temporal Dead Zone (TDZ)** | Time between `let`/`const` declaration and initialization |

---

## ⚠️ Let & Const Example

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;
```

> `let` and `const` are hoisted but not initialized, leading to a **Temporal Dead Zone**.

---

## ✅ Summary Table

| Code | Declared? | Initialized? | Output |
|------|-----------|--------------|--------|
| `let x; console.log(x);` | ✅ Yes | ❌ No | `undefined` |
| `console.log(y);` | ❌ No | ❌ No | `ReferenceError` |
| `var z = 10; console.log(z);` | ✅ Yes | ✅ Yes | `10` |

---

## 📌 Pro Tips

- Prefer `let`/`const` over `var` to avoid hoisting-related bugs.
- Use `typeof` to check for potentially undeclared variables.
- Always initialize variables where possible.

---

🧑‍💼 **Technical Interview Tip:**  
“Explain the difference between `undefined`, `null`, and `not defined`” is a classic JS interview question. Be ready with **code examples** and **execution flow** knowledge.
