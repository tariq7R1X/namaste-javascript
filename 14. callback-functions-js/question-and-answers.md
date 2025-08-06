
# 💼 Callback Functions – Interview Questions with Answers

---

### **1. What is a callback function in JavaScript?**

**Answer:**  
A **callback function** is a function that is **passed as an argument to another function**, and is **executed after some operation has been completed**.

#### ✅ Example:
```javascript
function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  let name = "Tarique";
  callback(name);
}

processUserInput(greet); // Output: Hello, Tarique
```

---

### **2. Why are callback functions used in JavaScript?**

**Answer:**  
Callback functions are used to:
- Handle **asynchronous operations** (like API calls, file reading).
- Allow **code modularity and reusability**.
- Provide **custom behavior** to a generic function.

#### ✅ Real Use Case:
```javascript
setTimeout(function () {
  console.log("Data fetched");
}, 2000);
```

---

### **3. Give a real example where callback functions are useful.**

**Answer:**  
A common example is in **event handling** with `addEventListener`.

#### ✅ Example:
```javascript
document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});
```

---

### **4. Explain how event listeners use callback functions.**

**Answer:**  
`addEventListener` attaches a **callback function** to an event (e.g., `click`, `hover`, etc.). When the event occurs, the callback is automatically invoked by the browser.

#### ✅ Example:
```javascript
document.addEventListener("keydown", function (event) {
  console.log("Key pressed:", event.key);
});
```

---

### **5. What is callback hell? How do you avoid it?**

**Answer:**  
**Callback Hell** occurs when multiple callback functions are nested within each other, making the code difficult to read and maintain.

#### ❌ Example (Callback Hell):
```javascript
loginUser(function (user) {
  getUserPosts(user.id, function (posts) {
    getComments(posts[0].id, function (comments) {
      console.log(comments);
    });
  });
});
```

**How to avoid:**
- Use **named functions**.
- Use **Promises** or **async/await**.

#### ✅ Using Promises:
```javascript
loginUser("user")
  .then(getUserPosts)
  .then(getComments)
  .then(console.log);
```

---

### **6. What's the difference between a synchronous and an asynchronous callback?**

| Feature | Synchronous Callback | Asynchronous Callback |
|--------|----------------------|------------------------|
| When it runs | Immediately, during execution | Later, after an operation |
| Blocking | Yes | No |
| Common use | Array functions (map, filter) | setTimeout, event handling |

#### ✅ Examples:

**Synchronous Callback:**
```javascript
[1, 2, 3].forEach(function (num) {
  console.log(num);
});
```

**Asynchronous Callback:**
```javascript
setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);
```

---

### **7. What is the role of the Event Loop when working with callbacks?**

**Answer:**  
The **Event Loop** continuously checks the **call stack** and the **callback queue**. If the call stack is empty, it pushes the callback from the queue to the stack to be executed.

#### ✅ Example:
```javascript
console.log("Start");

setTimeout(function () {
  console.log("Callback executed");
}, 0);

console.log("End");
```

**Output:**
```
Start
End
Callback executed
```

---

### **8. What happens behind the scenes when `setTimeout` is used with a callback?**

**Answer:**  
When `setTimeout` is called:
1. The callback function is passed to the **Browser API** (not JS engine).
2. Timer runs in the background.
3. After the timer ends, the callback is sent to the **callback queue**.
4. **Event Loop** checks if the call stack is empty.
5. Callback is then pushed to the call stack and executed.

#### ✅ Example:
```javascript
setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 2000);
```
