
# EP-03 | Creating a Promise, Chaining & Error Handling

---

## 1. Key Concepts & Definitions

| Concept | What it Means / How It Works |
|---|---|
| **Promise constructor (producer side)** | Creating a promise: `new Promise((resolve, reject) => { … })`. The executor function is given two callbacks: `resolve` (for success) and `reject` (for failure). |
| **validateCart / business logic** | Before resolving, you check whether conditions are met (e.g. cart is valid). If not, reject with an error. |
| **Consumer side: `.then` & `.catch`** | After you get a promise, you use `.then()` to handle resolved value, and `.catch()` to handle any rejection / error. |
| **Promise chaining** | You can return values (or promises) in `.then()`, so that subsequent `.then()` in the chain gets that value. If any promise in the chain rejects, control jumps to the `.catch()` (if there is one). |
| **Error propagation** | If something fails in any step of the chain, later `.then()`s are skipped, and `.catch()` handles the error. Also, you can have `.catch()` in the middle of a chain, but things after that may still execute depending on how you structure it. |

---

## 2. Examples + Real‑Life Scenarios

### 🛒 Online Shopping / E‑Commerce Flow

- **Scenario**: User adds items to cart → check stock → place order → process payment → send receipt.

```js
function validateCart(cart) {
  return cart.every(item => item.inStock);
}

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      reject(new Error('Some items are out of stock'));
    } else {
      const orderId = 'ORD-98765';
      resolve(orderId);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (true) { // simulate success
      resolve({ orderId, status: 'Payment Successful' });
    } else {
      reject(new Error('Payment failed'));
    }
  });
}

createOrder(cart)
  .then(orderId => proceedToPayment(orderId))
  .then(paymentInfo => console.log('Flow succeeded:', paymentInfo))
  .catch(err => console.error('Flow failed:', err.message));
```

---

### 📧 User Registration + Email Confirmation

- Validate user data → save user to DB → send confirmation email.  
- If email fails, handle via `.catch()` and give user feedback.

---

### 📂 File Upload & Processing

- Upload file → validate → process (resize/compress) → save → respond.  
- Promises ensure errors (e.g. wrong file type) stop further work.

---

## 3. Top Interview Questions & Answers

| Question | Suggested Answer |
|---|---|
| **Q1: What are the states of a Promise in JS?** | Pending → Fulfilled (resolved) → Rejected. Once resolved/rejected, state is final. |
| **Q2: How do you create a promise?** | `new Promise((resolve, reject) => { ... })`. Call resolve for success, reject for error. |
| **Q3: What is promise chaining?** | Linking multiple async operations one after another using `.then()`. |
| **Q4: How does error handling work in chaining?** | If any step fails (rejects/throws), it jumps to nearest `.catch()`. |
| **Q5: `.then(onFulfilled, onRejected)` vs `.catch()`?** | `.then(a, b)` handles both success/failure in one call, `.catch()` is cleaner for errors and also catches errors thrown in `.then()`. |
| **Q6: When use multiple `.catch()` blocks?** | To handle different errors differently (e.g. validation error vs payment error). |

---

## 4. Pitfalls & Best Practices

- Always **return a promise** in `.then()` if async work is happening.  
- **Catch placement matters** – `.catch()` handles errors above it, not below.  
- Errors inside `.then()` are caught by later `.catch()`.  
- Never swallow errors silently. Always log or handle.  
- With `async/await`, wrap in `try/catch` for the same effect.  

---
