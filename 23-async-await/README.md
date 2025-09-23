# EP-04 | Async & Await

---

## 1. What are `async` and `await`

- **`async` keyword** before a function makes that function return a **Promise**, even if you return a plain value.  
- **`await` keyword** can only be used *inside* an `async` function. It pauses the execution of the `async` function (without blocking the whole JS runtime) until the awaited Promise resolves (or rejects).  

---

## 2. How async/await works under the hood

- Behind the scenes, `async`/`await` is syntactic sugar over **Promises**.  
- When you `await` a Promise, JS engine:  
  1. Suspends the async function (i.e. removes it from call stack) at that point,  
  2. Lets other JS tasks (events, other functions, etc.) run,  
  3. When the awaited Promise settles, the async function is resumed.

- Error handling is done via `try/catch` inside `async` functions; or you can handle errors with `.catch()` on the returned Promise.

---

## 3. Differences vs Promises / `.then()` chaining

| Feature | `.then()` / `.catch()` | `async` / `await` |
|---------|--------------------------|----------------------|
| Readability | Chain of callbacks, can get nested or less linear | More linear, looks like synchronous code |
| Error handling | `.catch()` / nested `.then().catch()` | `try/catch` inside async functions, more intuitive |
| Sequential operations | You often nest or chain | Easier to write sequential steps with `await` |
| Parallel operations | Easy with `Promise.all()` etc. | You still use `Promise.all()` or run awaits without ordering if appropriate |

---

## 4. Code Examples

### Example A: Basic async function

```js
async function sayHello() {
  return "Hello world";
}

const resultPromise = sayHello();
console.log(resultPromise);  // Promise { "Hello world" }
resultPromise.then(res => console.log(res));  // "Hello world"
```

### Example B: Using `await`

```js
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doWork() {
  console.log("Start");

  await wait(2000);  // wait 2 seconds

  console.log("After 2 seconds");
}

doWork();
// Output:
// "Start"
// (after ~2 seconds)
// "After 2 seconds"
```

### Example C: Multiple awaits, sequential vs parallel

```js
const p1 = new Promise(resolve => setTimeout(() => resolve("Result 1"), 3000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Result 2"), 1000));

async function sequential() {
  console.log("Sequential start");
  const r1 = await p1;        // waits ~3s
  console.log(r1);
  const r2 = await p2;        // then waits ~1s
  console.log(r2);
}

async function parallel() {
  console.log("Parallel start");
  const [r1, r2] = await Promise.all([p1, p2]);  // ~3s total
  console.log(r1, r2);
}

sequential();
parallel();
```

### Example D: Error handling

```js
async function fetchData() {
  try {
    const resp = await fetch("https://api.example.com/data");
    if (!resp.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await resp.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;  // or return some fallback
  }
}

fetchData()
  .then(data => console.log("Got data:", data))
  .catch(err => console.log("Fetch failed:", err));
```

---

## 5. Real‑life Scenarios / Analogies

- **Restaurant kitchen analogy**:  
  Imagine a chef (your async function) who has to prepare several dishes. Some dishes require waiting (like oven time). Using Promises + `.then()` is like the chef saying, “I’ll bake the roast, and when it’s done, I'll do the salad, and when that’s done, dessert,” and writing a sequence of callbacks.  
  Using `async/await` is like the chef writing out “Preheat oven → Put roast in oven → Wait until roast is cooked → Make salad → Make dessert” in one recipe sequence. More linear, easier to follow.

- **Library queue**:  
  If you request a book, you wait in queue. `await` is like “hold my place until my book arrives,” then continue reading once it arrives, while others in the library can do other actions (not blocking everyone else).

---

## 6. Common Pitfalls / What to Watch Out For

- Using `await` outside `async` function → syntax error.  
- Unintentionally sequential code when you meant parallel.  
- Not handling errors (forgetting `try/catch`).  
- If one of multiple awaited operations fails, the whole `Promise.all()` fails.  
- Blocked by long‐running awaits: execution order/timing might be delayed more than expected.

---

## 7. Top Interview Questions & Sample Answers

| Question | Sample Answer / Key Points |
|---|------------------------------|
| **1. What does `async` keyword do?** | It marks a function so that it returns a Promise. Whatever you return in an `async` function is wrapped in a Promise. If you throw inside it, the returned Promise is rejected. |
| **2. What does `await` do?** | It pauses execution of the `async` function until the awaited Promise settles. It gives you the resolved value, or throws if the Promise rejects. |
| **3. Can you use `await` outside an `async` function?** | No, that’s syntax error (except in environments supporting top‑level await). |
| **4. How do you handle errors with async/await?** | Use `try/catch` inside the async function, or `.catch()` on the returned Promise. |
| **5. Sequential vs Parallel execution?** | Sequential: awaiting one after another, total time adds up. Parallel: start promises first, then `await` them together with `Promise.all()`. |
| **6. What happens if one awaited promise rejects and no try/catch?** | The async function returns a rejected Promise → unhandled rejection if not caught. |
| **7. Can you cancel an `await`?** | No direct cancellation. Use AbortController or custom cancellation logic. |
| **8. Async/await vs Promises?** | Async/await is syntactic sugar over Promises. Easier to read, but for parallel tasks you still need Promise APIs. |
| **9. What is `Promise.allSettled()` / `Promise.race()`?** | `allSettled()` → returns results of all promises regardless of success/failure. `race()` → settles when the first promise settles. |
| **10. Misuse of async/await causing performance issues?** | Awaiting in loops → runs sequentially. Better to start promises, then use `Promise.all()` to resolve together. |

---
