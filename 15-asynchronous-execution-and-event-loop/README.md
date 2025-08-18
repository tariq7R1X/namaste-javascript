# 🧠 JavaScript Asynchronous Execution & Event Loop - Full Notes (Namaste JavaScript EP-15)

## 🧱 1. How JavaScript Engine Executes Code using the Call Stack

### 🔹 What is Call Stack?
A **Call Stack** is a data structure that keeps track of function calls in the order they need to be executed.

### 🧪 Example:
```js
function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.log("Hello from three");
}
one();
```

### 📌 Call Stack Execution Order:
1. `one()` is pushed  
2. `two()` is pushed  
3. `three()` is pushed  
4. Logs message  
5. `three()`, `two()`, `one()` are popped off

> ❗ The stack is **LIFO (Last In, First Out)**

## ⏳ 2. How JavaScript Performs Asynchronous Tasks

JavaScript itself is **synchronous and single-threaded**.

But it performs asynchronous operations using:
- **Browser Web APIs**
- **Callback Queue**
- **Microtask Queue**
- **Event Loop**

> ✅ Async tasks like `setTimeout`, `fetch`, event listeners don’t block the stack because **they’re offloaded to the browser**.

## 🌐 3. Behind the Scenes in the Browser

### 📊 Main Components:
- **JS Engine** (e.g. V8)
- **Web APIs** (setTimeout, DOM, fetch)
- **Callback Queue**
- **Microtask Queue**
- **Event Loop**

### 🔁 Flow:
1. JS Engine executes sync code via **Call Stack**
2. Async tasks are passed to **Web APIs**
3. Once completed, callbacks go to **Callback/Microtask Queue**
4. **Event Loop** checks if stack is empty and **moves tasks in**

## 🔌 4. Web APIs in JS

These are **browser-provided** features exposed to JavaScript:
- `setTimeout`, `setInterval`
- `fetch()`
- DOM Events (`addEventListener`)
- `localStorage`, `console`, `navigator`

> ❗ Not part of the JS Engine. They're defined in the **Web Platform** (Browser or Node.js APIs).

## ⏰ 5. How setTimeout Works Behind the Scenes

```js
console.log("Start");
setTimeout(() => console.log("Timeout callback"), 0);
console.log("End");
```

### ✅ Behind the Scenes:
1. `setTimeout` is handed to **Web API**
2. After timeout (0ms), callback is queued
3. Event Loop checks the stack
4. Once stack is empty, callback is pushed in

### Output:
```
Start
End
Timeout callback
```

## 🔁 6. What is Event Loop & Callback Queue in JS

### 🔄 Event Loop:
A loop that:
- Monitors the **Call Stack**
- Monitors the **Callback Queue**
- Moves callbacks to the stack when it’s empty

### 📦 Callback Queue:
Where async callback functions (e.g., from `setTimeout`, DOM events) **wait** to be executed.

## 🖱️ 7. How Event Listeners Work in JS

```js
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

### Behind the Scenes:
1. `addEventListener` is registered via **Web API**
2. When user clicks:
   - Callback pushed to **Callback Queue**
   - Event Loop checks → Stack empty → Push callback into Call Stack

## ❓ 8. Why Do We Need the Event Loop?

To **enable asynchronous programming** in a **single-threaded environment**, so:
- UI doesn't freeze
- Multiple tasks can be handled "simultaneously"
- Code remains non-blocking

## 🌍 9. How fetch() Function Works

```js
console.log("Start");
fetch("https://api.example.com")
  .then(() => console.log("Data fetched"));
console.log("End");
```

### 🔍 How it works:
1. `fetch()` goes to Web API
2. When response arrives → callback is sent to **Microtask Queue**

### Output:
```
Start
End
Data fetched
```

## 🧵 10. Microtask Queue in JS

### 🎯 What is it?
A **high-priority queue** for:
- `Promise.then()`
- `MutationObserver`
- `queueMicrotask()`

> 🧠 Microtasks are executed **before** tasks from the callback queue.

## ⚠️ 11. What are MicroTasks in JS?

### Examples:
```js
Promise.resolve().then(() => console.log("Microtask"));
setTimeout(() => console.log("Macrotask"), 0);
```

### Output:
```
Microtask
Macrotask
```

## 🚨 12. Starvation of Functions in Callback Queue

If microtask queue **never gets empty**, the **callback queue is starved**.

### Example:
```js
function run() {
  Promise.resolve().then(run);
}
run();
setTimeout(() => console.log("This will never run"), 0);
```

## 🧪 Combined Code Flow Example

```js
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
}).then(() => {
  console.log("Promise 2");
});

console.log("End");
```

### Output:
```
Start
End
Promise 1
Promise 2
setTimeout
```

# 💬 Top 20 Most Asked Interview Questions (Asynchronous JS)

1. What is the Event Loop in JavaScript?
2. Explain how JavaScript handles async operations.
3. How does `setTimeout` work internally?
4. Difference between `call stack`, `callback queue`, and `microtask queue`?
5. What are Web APIs in JS?
6. Is JavaScript single-threaded? How does it manage async tasks then?
7. What is the difference between macro-task and micro-task?
8. When does the callback in `setTimeout(fn, 0)` run?
9. Explain how promises are executed in the event loop.
10. What causes callback queue starvation?
11. Why do promises execute before setTimeout?
12. What are microtasks and why do they have higher priority?
13. How do event listeners work under the hood?
14. What is the difference between sync and async code?
15. What happens if the call stack is full?
16. Is `fetch()` a part of JavaScript?
17. What is the role of the browser in JS async execution?
18. How is the call stack emptied?
19. Can setTimeout delay be less than 4ms?
20. How does the JS engine interact with the browser?

## 📚 Summary Table

| Concept           | Queue Used         | Priority |
|------------------|--------------------|----------|
| `setTimeout`      | Callback Queue     | Low      |
| DOM Events        | Callback Queue     | Low      |
| `fetch().then()`  | Microtask Queue    | High     |
| `Promise.then()`  | Microtask Queue    | High     |
| `queueMicrotask()`| Microtask Queue    | High     |

## ✅ Practice Example

```js
console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

### Output:
```
Start
End
Promise
setTimeout
```