# 📘 EP-13: First-Class Functions (ft. Anonymous Functions) — Akshay Saini (Namaste JavaScript)

## 🔥 What are First-Class Functions in JavaScript?

In JavaScript, **functions are treated as "first-class citizens"**, meaning:

✅ Functions can be:

- Assigned to variables
- Passed as arguments to other functions
- Returned from other functions
- Stored in data structures (arrays, objects, etc.)

➡️ In simpler terms: **Functions are values** — just like numbers, strings, objects.

---

## 🔹 Example 1: Assigning Function to a Variable

```js
const greet = function () {
  console.log("Hello World!");
};

greet(); // Output: Hello World!
```

💡 The function is stored in a variable just like any other value.

---

## 🔹 Anonymous Functions

A function **without a name** is called an **anonymous function**.

```js
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
```

🧠 These are mostly used:

- As callback functions
- Inside higher-order functions
- When the function is only needed once

---

## 🔹 Example 2: Passing Function as Argument (Callback Function)

```js
function calculate(a, b, operation) {
  return operation(a, b);
}

const result = calculate(5, 3, function (x, y) {
  return x * y;
});

console.log(result); // Output: 15
```

📌 Here, the anonymous function is passed as an argument to another function — **core part of first-class functions**.

---

## 🔹 Example 3: Returning a Function from a Function

```js
function greetGenerator() {
  return function (name) {
    console.log("Hello, " + name);
  };
}

const greeter = greetGenerator();
greeter("Tarique"); // Output: Hello, Tarique
```

🧠 This is how JavaScript allows functional programming — you can create _function factories_.

---

## 🔹 Real-Life Scenario

📱 **Event Listeners** — Common use of anonymous functions:

```js
document.getElementById("btn").addEventListener("click", function () {
  alert("Button Clicked!");
});
```

💼 Used heavily in:

- DOM Manipulation
- React's JSX event handlers
- Node.js server logic
- Functional utilities like `.map()`, `.filter()`, `.reduce()`

---

## 🔹 Higher-Order Functions

A function that takes another function as an argument or returns a function is called a **Higher-Order Function**.

🧠 This is only possible because of **First-Class Functions**.

---

## 🔹 Interview Questions

1. **What are First-Class Functions in JavaScript?**

   > Functions that can be treated like any other value (stored in variables, passed, returned, etc.).

2. **What is the difference between First-Class and Higher-Order Functions?**

   > First-Class describes the ability; Higher-Order describes the usage (i.e., a function using another function).

3. **What is an Anonymous Function? Where is it used?**

   > A function without a name; used in callbacks, event listeners, and higher-order functions.

4. **Can you give a real-world use case where First-Class Functions are useful?**

   > Callback functions in asynchronous code (e.g., setTimeout, API calls, event handling).

5. **Can you store a function in an object or array in JavaScript?**
   > Yes, because functions are values.

---

---

## 🔹 Parameter vs Argument

---

## 🔹 Parameter vs Argument (Key Points)

- A **parameter** is a named variable used in the function definition — it acts as a placeholder for values.

- An **argument** is the actual value passed to a function when it is invoked.

- Example:  
  In `function greet(name) { console.log("Hello, " + name); }`, `name` is the **parameter**.  
  When calling `greet("Tarique")`, `"Tarique"` is the **argument**.

- In another example:  
  `function add(x, y) { return x + y; }`  
  Here, `x` and `y` are **parameters**, and calling `add(5, 3)` passes the **arguments** `5` and `3`.

- **Parameters** define the kind of input a function expects.

- **Arguments** are the actual values provided by the caller during execution.

- Understanding this distinction helps clarify how functions receive and use data in JavaScript.

### 🚀Here's a quick side-by-side comparison:

| Term          | Description                                                   |
| ------------- | ------------------------------------------------------------- |
| **Parameter** | A named variable in the function definition (e.g., `x`, `y`)  |
| **Argument**  | The actual value passed to the function call (e.g., `5`, `3`) |

You can think of parameters as labeled containers and arguments as the actual things you put inside them. The container (parameter) waits for something, and the argument is what fills it when the function runs.

---

## 🔹 Bonus: Functions in Arrays and Objects

```js
const operations = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];

console.log(operations[0](4, 2)); // Output: 6
```

```js
const obj = {
  greet: function () {
    console.log("Hi there!");
  },
};

obj.greet(); // Output: Hi there!
```

---

## 🔹 Summary (Key Takeaways)

- ✅ JavaScript treats functions as **first-class citizens**.
- ✅ You can **assign**, **pass**, and **return** functions like any other variable.
- ✅ **Anonymous functions** are function expressions without a name.
- ✅ Used in **callbacks**, **event handlers**, and **functional programming**.
- ✅ **Higher-order functions** are made possible because of this concept.
