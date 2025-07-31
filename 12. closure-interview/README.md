# 🧠 JavaScript Interview Prep: Closures | Namaste JavaScript Ep. 12

Based on: [Namaste JavaScript Ep. 12](https://youtu.be/t1nFAMws5FI)

---

## ✅ What is a Closure?

A **closure** is a function that **remembers its lexical scope**, even when the function is executed outside that scope.

### 📌 Example:

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```

---

## ❓ Interview Questions with Answers

---

### 1. **What is the output of this code?**

```js
function x() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 1000);
  console.log("Hello");
}
x();
```

**Output:**

```
Hello
1
```

---

### 2. **What is the output of this loop with setTimeout?**

```js
function a() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
a();
```

**Output:**

```
6
6
6
6
6
```

**Why?**
Because `var` is function-scoped, the loop variable `i` is shared across all iterations and closures.

---

### 3. **How to fix the above code using `let` or closure?**

✅ Using `let`:

```js
for (let i = 1; i <= 5; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
```

✅ Using closure:

```js
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), i * 1000);
  })(i);
}
```

---

### 4. **How do closures help in data privacy?**

Closures allow you to create private variables.

```js
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count,
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.get()); // 1
```

---

### 5. **What is Garbage Collection in JS?**

Garbage collection is an automatic process where memory that is no longer accessible is freed.

```js
let obj = { name: "Tarique" };
obj = null; // ready for GC
```

---

### 6. **How do closures affect garbage collection?**

Closures can **retain references to outer variables**, preventing them from being garbage collected.

```js
function outer() {
  let largeData = new Array(1000000).fill("🚀");
  return function inner() {
    console.log("Closure in use");
  };
}

const leak = outer(); // largeData not GC'd
```

**Avoid memory leaks by only capturing variables you need.**

---

### 7. **What is the difference between function scope and block scope?**

| Feature  | `var`              | `let` / `const`      |
| -------- | ------------------ | -------------------- |
| Scope    | Function           | Block                |
| Hoisted? | Yes                | Yes (TDZ)            |
| Closures | Captures reference | Captures new binding |

---

### 8. **Where are closures used in real projects?**

- Debouncing
- Event listeners
- Factory functions
- Encapsulation
- Functional programming

**Example: Debounce**

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

---

### 9. **Tricky Interview Tip:**

Be careful with `var` + `setTimeout` inside loops. Use `let` or IIFE for correct behavior.

---

## 🏁 Summary

- Closures are powerful, but they can cause **memory leaks** if not handled carefully.
- `let` is preferred over `var` in loops with async code.
- Use closures for **encapsulation** and **custom behavior**.

---

🧠 **Practice Tip:** Try creating a counter, stopwatch, or debounce utility using closures!
