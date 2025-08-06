
# 📘 Episode 14: Callback Functions in JS ft. Event Listeners - Notes

## 🔁 What is a Callback Function?

### ➤ Definition:
A **callback function** is **a function passed as an argument to another function**, which is then **invoked (called back)** inside the outer function to complete some kind of routine or action.

### ➤ Simple Example:
```javascript
function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  let name = "Tarique";
  callback(name); // calling the callback function
}

processUserInput(greet);
```

---

## 🧠 Why Use Callback Functions?

- **Reusability**: One function can call different callbacks based on logic.
- **Asynchronous handling**: You can continue execution without waiting.
- **Control**: You decide what should happen after a task completes.

---

## ⏳ Real Use Case: Asynchronous Operations

Example: Fetching data from a server

```javascript
setTimeout(function () {
  console.log("Data fetched!");
}, 2000);
```

---

## 🖱️ Event Listeners and Callback Functions

### ➤ Event Listeners use callbacks heavily.
```javascript
document.getElementById("btn").addEventListener("click", function () {
  console.log("Button clicked!");
});
```

---

## 🎯 Real-World Example

### ✅ Example:
```html
<button id="subscribeBtn">Subscribe</button>
```

```javascript
document.getElementById("subscribeBtn").addEventListener("click", function () {
  alert("Thank you for subscribing!");
});
```

---

## 💡 JavaScript is Synchronous and Single-threaded

JavaScript executes **one line at a time**, but with **callback functions** and the **Event Queue**, you can perform asynchronous tasks **without blocking** the main thread.

---

## 🎬 Behind the Scenes (Browser APIs + Event Loop)

```javascript
setTimeout(() => console.log("Timer done"), 2000);
console.log("Main thread done");
```

**Output:**
```
Main thread done
Timer done
```

---

## 🚦Types of Callback Functions

| Type | Example |
|------|---------|
| Named callback | `addEventListener("click", handleClick)` |
| Anonymous callback | `addEventListener("click", function () {...})` |
| Arrow function | `addEventListener("click", () => {...})` |

---

## ❗ Callback Hell (Mentioned briefly)

```javascript
getUser(function (user) {
  getPosts(user, function (posts) {
    getComments(posts, function (comments) {
      // messy...
    });
  });
});
```

🔄 This leads to **hard-to-maintain code** (aka **"Pyramid of Doom"**)

---

## 📌 Key Takeaways

- Callback functions are functions **passed as arguments** to other functions.
- Used in **asynchronous programming**, **DOM events**, **timers**, and more.
- Important in understanding **Event Loop**, **Event Listeners**, and **non-blocking code**.
- Can lead to **callback hell**, later solved by **Promises** and **async/await**.

---

## 💼 Interview Questions

1. What is a callback function in JavaScript?
2. Why are callback functions used in JavaScript?
3. Give a real example where callback functions are useful.
4. Explain how event listeners use callback functions.
5. What is callback hell? How do you avoid it?
6. What's the difference between a synchronous and an asynchronous callback?
7. What is the role of the Event Loop when working with callbacks?
8. What happens behind the scenes when `setTimeout` is used with a callback?

---

## 🧪 Practice Challenge

Create a button that when clicked after 3 seconds, shows an alert.

```html
<button id="btn">Click Me</button>
```

```javascript
document.getElementById("btn").addEventListener("click", function () {
  setTimeout(function () {
    alert("You clicked after 3 seconds!");
  }, 3000);
});
```
