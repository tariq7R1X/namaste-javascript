# EP-02 | Promises

---

## 1. Key Concepts (Short & To the Point)

| Concept | What it means | Real‑life analogy / example |
|---|----------------|-----------------------------|
| **Asynchronous operations** | Tasks that happen in the background; code doesn’t wait for them before moving on. | Ordering food via app: you place order, but you don’t wait inside the kitchen. Meanwhile, you can keep scrolling your phone. |
| **Callback Hell / Pyramid of Doom** | Many nested callbacks due to dependent async tasks; hard to read & maintain. | Suppose you have to: place order → pay → get receipt → give feedback. If each step uses callback inside callback, code becomes nested deeply. |
| **Inversion of Control** | When you pass a callback to someone else and lose control over when (or even if) it gets called. Risky. | You give your address to delivery guy and assume they’ll deliver. If they don’t because of issues, you have no way to enforce or know immediately. |
| **Promise** | A JS object representing a value that will be available later (or an error). Has states: *pending*, *fulfilled*, *rejected*. |
| **Producer vs Consumer** | Producer: code that creates & returns the promise (does async work). Consumer: code that uses `.then`, `.catch` etc to get result or error. |
| **Then / Catch / Finally** | `.then(...)` handles success (fulfilled), `.catch(...)` handles errors, `.finally(...)` runs regardless (cleanup). |
| **Promise Chaining** | Returning promises in `.then` so that you can sequence dependent async tasks cleanly (without deep nesting). |
| **Immutability of promise result** | Once a promise is fulfilled or rejected, its outcome/value can’t be changed. |
| **States of a Promise** | Pending → Fulfilled OR Pending → Rejected. It can’t go back, can’t fulfilled more than once. |

---

## 2. Code Example (E‑Commerce Scenario)

```js
// Producer functions return Promises
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      reject(new Error("Cart is invalid"));
    } else {
      const orderId = "ABC123"; // imagine DB work
      resolve(orderId);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    // simulate success
    resolve(`Payment done for order ${orderId}`);
  });
}

function showOrderSummary(paymentResult) {
  return new Promise((resolve) => {
    resolve(`Summary: ${paymentResult}`);
  });
}

// Consumer
createOrder(cart)
  .then(orderId => {
    return proceedToPayment(orderId);
  })
  .then(paymentResult => {
    return showOrderSummary(paymentResult);
  })
  .then(summary => {
    console.log(summary);
  })
  .catch(err => {
    console.error("Error:", err);
  });
```

✨ Clean chaining, no nested callbacks.  
✨ Errors handled in `.catch`.  
✨ Each step returns a promise.

---

## 3. Real‑Life Scenario

Ride‑hailing app flow:

1. **Request ride** → get ride ID.  
2. **Driver accepted** → wait for confirmation.  
3. **Driver arrives** → receive notification.  
4. **Ride completed** → make payment.  

Each step is async and depends on previous. Promises (or `async/await`) handle this flow cleanly.

---

## 4. Common Pitfalls

- Not returning a promise inside `.then` → breaks chain.  
- Forgetting `.catch` → unhandled errors.  
- Mixing callbacks & promises → confusion.  
- Assuming promise resolves immediately.  

---

## 5. Interview Questions & Answers

| Question | Sample Answer |
|---|----------------|
| **What is a Promise in JavaScript?** | A Promise is an object representing a value which may be available now, or in the future, or never. It allows handling async operations more cleanly than callbacks. |
| **What are the states of a Promise?** | `pending`, `fulfilled` (success), `rejected` (failure). Once fulfilled or rejected, it can’t change. |
| **What is callback hell and how do Promises solve it?** | Callback hell is deeply nested callbacks when async tasks depend on one another. Promises allow chaining with `.then` and flatten those structures. |
| **What is “inversion of control” in callbacks?** | You give control to another function when passing a callback. Promises reduce this issue because handlers run only once when state changes. |
| **How do `.then()`, `.catch()`, and `.finally()` work?** | `.then()` handles fulfilled values, `.catch()` handles rejections, `.finally()` runs regardless. `.then()` returns a new Promise for chaining. |
| **What happens if you forget to return in `.then()`?** | The next `.then()` executes immediately with `undefined`. Dependency is broken, errors may be skipped. |
| **Can a Promise be mutated once fulfilled?** | No. Once resolved/rejected, the result is fixed. |
| **Compare `.then/.catch` vs `async/await`.** | `async/await` is syntactic sugar over Promises. It makes code look synchronous, but still needs `try/catch` for errors. |

---

✅ Promises simplify async handling.  
✅ They solve callback hell & inversion of control.  
✅ They’re the base of modern `async/await`.  
