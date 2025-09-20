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

````|
| **7. What are pitfalls of using HOF / FP?** | Nested callbacks or chaining may reduce readability; impure callbacks break predictability; performance concerns if over‑used; over‑engineering small tasks. |
| **8. What is currying / partial application?** | Currying: transforming a function with multiple parameters into a sequence of functions each taking one parameter. Partial application: pre‑filling some arguments and producing a new function with fewer arguments. |
| **9. Declarative vs imperative style?** | Imperative: you write out step‑by‑step how something is done (loops, mutation). Declarative: you state *what* should be done (map/filter) without specifying every step. FP favors declarative. |
| **10. Give an example where a higher‑order function improves maintainability.** | Suppose you have several operations on an array (area, volume, etc.). Instead of writing loops for each, you write a general function `operate(arr, fn)` and pass in the specific operation. |

---

## Additional Examples

```js
// Returning a function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const doubler = multiplier(2);
console.log(doubler(5));  // 10

// Composition
const add1 = x => x + 1;
const square = x => x * x;

const add1ThenSquare = x => square(add1(x));
const squareThenAdd1 = x => add1(square(x));

console.log(add1ThenSquare(2));  // 9
console.log(squareThenAdd1(2));  // 5

// Retry wrapper
function retry(fn, times) {
  return async function(...args) {
    let attempt = 0;
    while (attempt < times) {
      try {
        return await fn(...args);
      } catch (err) {
        attempt++;
        if (attempt === times) throw err;
      }
    }
  };
}
````
