# Higher‑Order Functions & Functional Programming Notes

---

## What is a Higher‑Order Function (HOF)

- A **higher‑order function** is a function that takes one or more functions as arguments, and/or **returns** a function as its result.
- Functions are “first‑class citizens” in JavaScript: you can assign them to variables, pass them around, return them, etc.

---

## Why use Higher‑Order Functions / Functional Programming

- Avoid code duplication (DRY principle).
- More modular, composable, maintainable code.
- Easier testing and reasoning (especially with pure functions).
- Declarative style: describe _what_ rather than _how_.
- Often built‑in tools (map, filter, reduce) use HOFs, so you can leverage them.

---

## Key Examples

### Basic Example

```js
function sayHi() {
  console.log("Hi");
}

function greeter(fn) {
  fn();
}

greeter(sayHi); // outputs "Hi"
```

### Example: Radii → Area / Circumference

```js
const radii = [1, 2, 3, 4];

function area(r) {
  return Math.PI * r * r;
}

function circumference(r) {
  return 2 * Math.PI * r;
}

function calculate(radiiArr, operation) {
  const output = [];
  for (let i = 0; i < radiiArr.length; i++) {
    output.push(operation(radiiArr[i]));
  }
  return output;
}

console.log(calculate(radii, area));
console.log(calculate(radii, circumference));
```

This abstracts the loop so you only change the “operation” being applied. It mirrors what `.map(...)` does.

---

## Real‑Life Scenarios

1. **Validation utilities** — validating different rules on form fields by passing in different validator functions.
2. **Middleware / Request processing** — wrapping or chaining functions to add logging, authentication, etc.
3. **Retry / caching wrappers** — wrap a given function so that it retries on failure, or caches its result.
4. **Event listeners / UI logic** — passing callbacks to handle UI events.
5. **Data pipelines / transformations** — combining filter, map, reduce, etc. to clean, transform, aggregate data.

---

## Functional Programming Concepts

- **Pure functions**: always same output for same input, no side effects.
- **Immutability**: don’t mutate inputs; return new data structures.
- **Function composition**: building new functions by combining simpler ones.
- **Declarative programming** vs imperative: focus on what rather than how.

---

## Interview Questions & Answers

| Question                                              | Answer / Explanation                                                                                                                                     |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1. What is a higher‑order function?**               | A function that takes other functions as arguments, or returns a function. Eg: `map`, `filter`, or your own function that accepts an operation function. |
| **2. What are first‑class functions?**                | Functions treated as values: can be assigned, passed as arguments, returned. JS supports this.                                                           |
| **3. What is a pure function vs impure function?**    | Pure: no side effects, same input → same output. Impure: may mutate state, depend on external things (timers, I/O, global state).                        |
| **4. What is function composition?**                  | Combining functions so output of one is input to another. Eg: `f(g(x))`.                                                                                 |
| **5. Which built‑in HOFs do you commonly use in JS?** | `.map()`, `.filter()`, `.reduce()`, `.forEach()`, `.some()`, `.every()`, `.sort()` (via comparator), etc.                                                |
| **6. Write your own version (polyfill) of `map`.**    | ```js                                                                                                                                                    |

Array.prototype.myMap = function(fn) {
const result = [];
for (let i = 0; i < this.length; i++) {
result.push(fn(this[i], i, this));
}
return result;
}

---

## Common Interview Questions (Detailed)

### 7. What are pitfalls of using Higher-Order Functions / Functional Programming?

- **Readability issues**: Nested callbacks or too much chaining can make code hard to follow.  
- **Impure functions**: If passed functions are impure, predictability is lost.  
- **Performance concerns**: Excessive chaining of `.map()`, `.filter()`, etc. may create overhead.  
- **Over-engineering**: Using HOFs when a simple loop would suffice can add unnecessary complexity.  

---

### 8. What is Currying vs Partial Application?

- **Currying**  
  - Breaking down a function that takes multiple arguments into a sequence of functions that each take one argument.  
  - Example:  
    ```js
    const curryAdd = a => b => c => a + b + c;
    console.log(curryAdd(1)(2)(3)); // 6
    ```

- **Partial Application**  
  - Fixing a few arguments of a function and returning another function with fewer arguments.  
  - Example:  
    ```js
    function add(a, b, c) {
      return a + b + c;
    }
    const add5 = add.bind(null, 5);
    console.log(add5(10, 15)); // 30
    ```

---

### 9. Declarative vs Imperative Style

- **Imperative**:  
  - Focus on *how* to do something.  
  - Example:  
    ```js
    let doubled = [];
    for (let i = 0; i < arr.length; i++) {
      doubled.push(arr[i] * 2);
    }
    ```

- **Declarative**:  
  - Focus on *what* you want.  
  - Example:  
    ```js
    const doubled = arr.map(x => x * 2);
    ```
- Functional programming usually favors the declarative style because it’s more concise and expressive.  

---

### 10. Example: When Higher-Order Functions Improve Maintainability

**Scenario:**  
You have to perform multiple operations on an array of numbers (area, circumference, volume, etc.).  

- **Without HOFs**: You’d write multiple loops, one for each operation → lots of duplicate code.  
- **With HOFs**:  

  ```js
  function operate(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i]));
    }
    return result;
  }

  const radii = [1, 2, 3];
  const area = r => Math.PI * r * r;
  const circumference = r => 2 * Math.PI * r;

  console.log(operate(radii, area));
  console.log(operate(radii, circumference));
