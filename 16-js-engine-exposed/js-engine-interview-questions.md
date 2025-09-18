# 📝 JavaScript Engine - Interview Questions

## 1. Explain the difference between interpreter and compiler in a JS engine.

- **Interpreter:** Executes code line by line, translating to bytecode and running immediately.
- **Compiler (JIT):** Translates code into optimized machine code for faster execution.
- Modern JS engines use both (interpreter + JIT compiler).

---

## 2. What role does the AST play?

- **AST (Abstract Syntax Tree):** Tree representation of code after parsing.
- Used for: syntax validation, optimization, code transformations, and compilation.
- Example: `let x = 5 + 10;` → AST nodes for `VariableDeclarator`, `BinaryExpression`.

---

## 3. What is inline caching in JIT compilers?

- A performance optimization in JIT.
- Caches method/property lookup results to avoid repeated expensive lookups.
- Example:
  ```js
  function greet(user) {
    return user.name;
  }
  greet({ name: "Alice" });
  greet({ name: "Bob" });
  // After profiling, 'user.name' access is cached for speed
  ```

---

## 4. Is JavaScript compiled, interpreted, or both? Why?

- JS is **both**.
- Initially interpreted (bytecode), then hot code is compiled by JIT into machine code.
- This hybrid approach balances **fast startup** and **optimized execution**.

---

## 5. How does the mark & sweep GC algorithm work?

- **Mark phase:** Start from root objects, mark reachable objects.
- **Sweep phase:** Remove objects not marked.
- Helps avoid memory leaks from unused objects.

---

## 6. Why can optimized code be deoptimized?

- JIT makes assumptions (like stable object shapes).
- If assumptions break, engine **deoptimizes** back to slower interpreted code.
- Example: hidden class changes in V8.

---

## 7. Compare Node.js runtime vs browser runtime.

- **Browser:** DOM, Web APIs (fetch, localStorage, timers).
- **Node.js:** File system, OS modules, networking, no DOM.
- Both use V8, but provide different host environments.

---

## 8. Which is the fastest JS engine today and why?

- **V8 (Google):** Among the fastest.
- Uses **Ignition (interpreter)** + **TurboFan (optimizing compiler)**.
- Optimizations: hidden classes, inline caching, garbage collection improvements.

---

## 9. What is hidden class optimization in V8?

- Technique to speed up property access.
- Objects get hidden classes internally.
- If structure remains consistent, lookups are optimized.
- Example:
  ```js
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  let p1 = new Point(1, 2);
  let p2 = new Point(3, 4);
  // Both share same hidden class → faster property access
  ```

---

## 10. Give an example of a memory leak in JS.

```js
let users = [];
function addUser(user) {
  users.push(user);
}
setInterval(() => addUser({ name: "test" }), 1000);
// 'users' keeps growing, GC can't free memory → memory leak
```

---
