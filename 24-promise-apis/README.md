# EP-05 | Promise APIs + Interview Questions 🔥

---

## 1. Introduction: Why Promise APIs?

- Handling multiple async operations with plain `.then` chains can become messy.  
- JavaScript provides **Promise APIs** to simplify working with collections of promises:  
  - `Promise.all`  
  - `Promise.allSettled`  
  - `Promise.race`  
  - `Promise.any`  

---

## 2. The Promise APIs

### 2.1 Promise.all()

**Behavior**  
- Resolves when **all promises** resolve → returns array of values (in order).  
- Rejects **immediately** if **any promise rejects**.  

**Example**  
```js
const p1 = fetch('/user');
const p2 = fetch('/posts');
Promise.all([p1, p2])
  .then(([user, posts]) => console.log(user, posts))
  .catch(err => console.error('One failed:', err));
```

**Real Life Analogy**  
- Ordering ingredients from 3 shops; you can cook only if **all** arrive. If one fails, the dish fails.

---

### 2.2 Promise.allSettled()

**Behavior**  
- Resolves once **all promises settle** (either fulfilled or rejected).  
- Always resolves → returns array of objects with `{status, value}` or `{status, reason}`.  

**Example**  
```js
const p1 = Promise.resolve(10);
const p2 = Promise.reject('Failed');
Promise.allSettled([p1, p2]).then(results => console.log(results));
```

**Real Life Analogy**  
- Sending invites to 10 people → after some time you see who accepted, who rejected, who ignored.

---

### 2.3 Promise.race()

**Behavior**  
- Settles as soon as **any promise settles** (fulfills or rejects).  
- Adopts the value/reason of the first settled promise.  

**Example**  
```js
const p1 = new Promise(res => setTimeout(() => res('A'), 1000));
const p2 = new Promise(res => setTimeout(() => res('B'), 500));
Promise.race([p1, p2]).then(winner => console.log('Winner:', winner));
```

**Real Life Analogy**  
- Two shipping methods → whichever delivers first, you use.

---

### 2.4 Promise.any()

**Behavior**  
- Resolves as soon as **any promise fulfills**.  
- Ignores rejections unless **all reject** → then rejects with `AggregateError`.  

**Example**  
```js
const p1 = Promise.reject('err1');
const p2 = Promise.resolve('OK');
Promise.any([p1, p2]).then(val => console.log('First success:', val));
```

**Real Life Analogy**  
- Applying for jobs on 5 portals → you go with the first acceptance.

---

## 3. Error Handling & Chaining

- Errors bubble up in promise chains until caught with `.catch`.  
- Returning a promise inside `.then` pauses chain until it settles.  
- `.finally` executes regardless of outcome; passes original value/reason forward.  
- Non-function arguments in `.then` are treated as defaults (`x => x` for success, `err => throw err` for failure).  

---

## 4. Common Interview Questions

1. Difference between `Promise.all` and `Promise.allSettled`?  
2. How does `Promise.race` differ from `Promise.any`?  
3. What happens if one promise in `Promise.all` rejects?  
4. What is an `AggregateError`? Where is it used?  
5. What happens if `.then` returns another promise?  
6. What does `.finally` do in a chain?  
7. Can promises be canceled?  
8. When do promise callbacks run vs `setTimeout` (microtask vs macrotask)?  

---

## 5. Real Life Analogies Recap

- **Promise.all** → Cooking with ingredients from multiple stores.  
- **Promise.allSettled** → Collecting responses from invitations.  
- **Promise.race** → Choosing the fastest shipping method.  
- **Promise.any** → Going with the first job acceptance.  

---
