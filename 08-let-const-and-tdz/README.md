
# 🧠 let, const & Temporal Dead Zone (TDZ) – Notes

## 1. Hoisting Behavior

- `let` and `const` declarations are **hoisted**—they’re recognized at the start of their block.
- However, they are **not initialized** until the code execution reaches their line.
- The window between hoisting and initialization is known as the **Temporal Dead Zone (TDZ)**.
- Accessing a variable during its TDZ results in a `ReferenceError`.

_Source: [adityamohan.me](https://www.adityamohan.me/javascript-temporal-dead-zone-demystified)_

---

## 2. Memory Placement

- `var` attaches its variables to the **global `window` object** (in browsers).
- `let` and `const` are placed in a separate **"script" memory**, making them **not accessible globally** via `window`.

---

## 3. Temporal Dead Zone (TDZ) Explained

- **Definition**: The **TDZ** is the time between a variable being hoisted and being initialized.
- During TDZ:
  - The variable exists in memory.
  - It is **inaccessible**.
  - Access throws a `ReferenceError`.
- Debugger tools show the variable as `undefined`, but trying to access it before initialization crashes the script.

📌 **Definition**:  
> The time since the `let` or `const` variable was hoisted till the moment it was initialized.

---

## 4. Differences Among `var`, `let`, and `const`

| Feature                  | `var`                         | `let`                       | `const`                              |
|--------------------------|-------------------------------|-----------------------------|--------------------------------------|
| Hoisting                 | Yes (initialized with `undefined`) | Yes (uninitialized)        | Yes (uninitialized)                 |
| Temporal Dead Zone (TDZ) | ❌ No                         | ✅ Yes                      | ✅ Yes                                |
| Re-declaration           | ✅ Allowed                    | ❌ Not allowed              | ❌ Not allowed                        |
| Re-assignment            | ✅ Allowed                    | ✅ Allowed                  | ❌ Not allowed after initialization   |
| Initialization Required  | ❌ Optional                   | ❌ Optional                 | ✅ Required at declaration            |

---

## 5. Error Types

- `ReferenceError`: Accessing a variable inside its TDZ.
- `SyntaxError`: Declaring a `const` without an initializer.
- `TypeError`: Reassigning a `const` after initialization.

---

## 6. Best Practices

- ✅ Favor `const` for values that won’t change.
- 🔁 Use `let` for variables that need to be reassigned.
- 🚫 Avoid `var` unless there’s a specific need.
- 🧹 To minimize TDZ issues, place `let`/`const` declarations at the top of blocks or modules.

---

## 🔧 Code Examples

```js
{
  console.log(a); // ❌ ReferenceError: Cannot access 'a' before initialization
  let a = 10;
}
```

```js
const x = 5;
x = 6; // ❌ TypeError: Assignment to constant variable
```

```js
const b; // ❌ SyntaxError: Missing initializer in const declaration
```

---

## ✅ Summary

- **Hoisting** happens for all variable types, but **only `var`** is initialized during hoisting.
- **TDZ** prevents accidental use of `let` and `const` before declaration.
- 🛠️ Choose `const` by default.
- Use `let` only when reassignment is needed.
- Avoid `var` to prevent bugs related to scope and hoisting.

---
