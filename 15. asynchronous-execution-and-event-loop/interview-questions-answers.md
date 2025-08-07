# 💬 20 Most Asked Interview Questions on Asynchronous JavaScript

| #  | Question                                                                  |
| -- | ------------------------------------------------------------------------- |
| 1  | What is the Event Loop in JavaScript?                                     |
| 2  | Explain how JavaScript handles async operations.                          |
| 3  | How does `setTimeout` work internally?                                    |
| 4  | Difference between `call stack`, `callback queue`, and `microtask queue`? |
| 5  | What are Web APIs in JS?                                                  |
| 6  | Is JavaScript single-threaded? How does it manage async tasks then?       |
| 7  | What is the difference between macro-task and micro-task?                 |
| 8  | When does the callback in `setTimeout(fn, 0)` run?                        |
| 9  | Explain how promises are executed in the event loop.                      |
| 10 | What causes callback queue starvation?                                    |
| 11 | Why do promises execute before setTimeout?                                |
| 12 | What are microtasks and why do they have higher priority?                 |
| 13 | How do event listeners work under the hood?                               |
| 14 | What is the difference between sync and async code?                       |
| 15 | What happens if the call stack is full?                                   |
| 16 | Is `fetch()` a part of JavaScript?                                        |
| 17 | What is the role of the browser in JS async execution?                    |
| 18 | How is the call stack emptied?                                            |
| 19 | Can setTimeout delay be less than 4ms?                                    |
| 20 | How does the JS engine interact with the browser?                         |

---

### 1. What is the Event Loop in JavaScript?
The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous callbacks. It checks whether the call stack is empty and if there are tasks in the callback/microtask queue waiting to be executed.

---

### 2. Explain how JavaScript handles async operations.
JavaScript uses Web APIs to offload async tasks. Once they complete, their callbacks are sent to the task queue (or microtask queue), and the event loop pushes them to the call stack when it’s empty.

---

### 3. How does `setTimeout` work internally?
It’s handled by the browser's Web API:
1. The timer is registered.
2. After the delay, the callback is moved to the callback queue.
3. The event loop moves it to the call stack if it’s empty.

---

### 4. Difference between `call stack`, `callback queue`, and `microtask queue`?
- Call Stack: Executes functions.
- Callback Queue: Stores async callbacks (e.g., `setTimeout`, events).
- Microtask Queue: Stores higher-priority tasks (`Promise.then`).

---

### 5. What are Web APIs in JS?
Features provided by browsers (not JS itself), such as `setTimeout`, `fetch`, DOM manipulation, etc., which allow async capabilities.

---

### 6. Is JavaScript single-threaded? How does it manage async tasks then?
Yes, JS is single-threaded. Async tasks are managed via the browser’s Web APIs and the event loop, allowing deferred execution of callbacks.

---

### 7. What is the difference between macro-task and micro-task?
- **Macro-tasks**: setTimeout, setInterval, I/O
- **Micro-tasks**: Promise callbacks, `queueMicrotask`
Micro-tasks are executed **before** the next macro-task.

---

### 8. When does the callback in `setTimeout(fn, 0)` run?
Only after the call stack is empty and all microtasks have been processed—even if the delay is 0ms.

---

### 9. Explain how promises are executed in the event loop.
Promise callbacks are added to the **microtask queue**. After the current script and microtasks are done, their handlers are executed.

---

### 10. What causes callback queue starvation?
If microtask queue keeps getting filled (like recursive Promises), the callback queue (macrotasks) never executes.

---

### 11. Why do promises execute before setTimeout?
Because they are added to the **microtask queue**, which has a higher priority than the **callback (macrotask) queue**.

---

### 12. What are microtasks and why do they have higher priority?
Microtasks (like `Promise.then`) are tasks that should execute immediately after the current operation. They're prioritized to keep the application responsive.

---

### 13. How do event listeners work under the hood?
The browser registers them via Web APIs. When the event happens, the associated callback is added to the callback queue and executed by the event loop.

---

### 14. What is the difference between sync and async code?
- Synchronous: Executed line by line.
- Asynchronous: Scheduled to run later without blocking current execution.

---

### 15. What happens if the call stack is full?
A **stack overflow** occurs. It usually happens with unbounded recursion, crashing the execution.

---

### 16. Is `fetch()` a part of JavaScript?
No. It's part of the Web API provided by browsers (or Node.js). JS interfaces with it, but it’s not part of the core language.

---

### 17. What is the role of the browser in JS async execution?
Browsers provide the Web APIs and runtime environment for JavaScript, allowing async operations to happen in parallel to the JS engine.

---

### 18. How is the call stack emptied?
By finishing function executions. Functions are pushed to the stack and popped off when completed.

---

### 19. Can setTimeout delay be less than 4ms?
Only in modern environments. Older specs (HTML5) enforced a 4ms minimum. Now it can go below, but it's still queued.

---

### 20. How does the JS engine interact with the browser?
JS engine executes code. For async tasks, it delegates them to the browser (Web APIs), which then communicate results back via the event loop.