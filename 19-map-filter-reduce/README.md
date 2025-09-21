# Map, Filter & Reduce – Detailed Notes (Namaste JavaScript Ep.19)

---

## Overview

These three are **higher order array methods** in JS. They take callback functions, transform/filter/reduce arrays, and help you write more declarative, functional style code rather than manual loops.

### What they are

- **`map()`** → transform every element in an array; same length output; new array.
- **`filter()`** → select elements from an array that satisfy a condition; output array possibly smaller.
- **`reduce()`** → “reduce” the array to a single value (or some single output), by accumulating via callback.

### Basic Syntax

```js
arr.map((currentValue, index, array) => { ...return transformedValue });
arr.filter((currentValue, index, array) => { ...return true/false });
arr.reduce((accumulator, currentValue, index, array) => { ...return updatedAccumulator }, initialValue);
```

---

## Examples from Lecture

- Doubling numbers using map.
- Filtering odd numbers.
- Summing elements with reduce.
- Finding maximum with reduce.
- Mapping user objects to full names.
- Counting by age using reduce.
- Chaining map + filter.

---

## Real Life Scenarios

| Scenario                  | Use of map/filter/reduce                                                  |
| ------------------------- | ------------------------------------------------------------------------- |
| **Data display in UI**    | Filter in-stock products, then map to product name/price.                 |
| **Analytics / Reporting** | Reduce logs of user activity to count per action type.                    |
| **Processing form input** | Filter empty strings, map to standardized format, reduce to final string. |
| **Financial app**         | Filter debits, map amounts, reduce to total debit.                        |
| **E‑commerce**            | Map items to cost, filter discounts, reduce to compute grand total.       |

---

## Code Examples

```js
// 1. Names of active users
const users = [
  { id: 1, name: "Alice", age: 28, isActive: true },
  { id: 2, name: "Bob", age: 17, isActive: false },
  { id: 3, name: "Charlie", age: 30, isActive: true },
];

const activeNames = users
  .filter((user) => user.isActive)
  .map((user) => user.name.toUpperCase());

console.log(activeNames); // ["ALICE", "CHARLIE"]
```

```js
// 2. Counting occurrences
const visits = [
  { page: "/home", user: "A" },
  { page: "/about", user: "B" },
  { page: "/home", user: "C" },
  { page: "/dashboard", user: "A" },
  { page: "/home", user: "A" },
];

const pageCounts = visits.reduce((acc, curr) => {
  acc[curr.page] = (acc[curr.page] || 0) + 1;
  return acc;
}, {});

console.log(pageCounts); // { "/home": 3, "/about": 1, "/dashboard": 1 }
```

```js
// 3. Orders total revenue
const orders = [
  { id: 1, amount: 250, status: "completed" },
  { id: 2, amount: 40, status: "pending" },
  { id: 3, amount: 125, status: "completed" },
  { id: 4, amount: 75, status: "cancelled" },
];

const total = orders
  .filter((o) => o.status === "completed" && o.amount > 100)
  .map((o) => o.amount)
  .reduce((sum, amt) => sum + amt, 0);

console.log(total); // 375
```

```js
// 4. Grouping by category
const products = [
  { id: 1, category: "electronics", price: 1200 },
  { id: 2, category: "clothing", price: 50 },
  { id: 3, category: "electronics", price: 800 },
  { id: 4, category: "clothing", price: 150 },
];

const byCategory = products.reduce((acc, prod) => {
  if (!acc[prod.category]) acc[prod.category] = 0;
  acc[prod.category] += prod.price;
  return acc;
}, {});

console.log(byCategory); // { electronics: 2000, clothing: 200 }
```

---

## Common Pitfalls

- Forgetting `initialValue` in reduce.
- Mutating the original array inside callbacks.
- Returning undefined in map/filter.
- Misusing map instead of filter (or vice versa).
- Chaining too many without readability.
- Performance concerns with very large arrays.

---

## Top Interview Questions & Answers

**Q1. Difference between map, filter, and reduce?**

- Map: transforms array → same length.
- Filter: selects subset.
- Reduce: boils down to single value.

**Q2. Callback arguments?**

- Map/filter: `(element, index, array)`
- Reduce: `(acc, curr, index, array)`

**Q3. What if no initial value in reduce?**

- Uses first element as acc. Error if empty array.

**Q4. Do these mutate original array?**

- No (but callback can mutate object references).

**Q5. Can you chain them?**

- Yes: `arr.filter(...).map(...).reduce(...)`

**Q6. Polyfill for map?**

```js
Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) result.push(cb(this[i], i, this));
  }
  return result;
};
```

**Q7. Why are they higher order functions?**

- They accept callbacks as arguments.

**Q8. Real-world use of reduce?**

- Counting/grouping, summing totals.

**Q9. Time complexity?**

- Each is O(n). Chaining is additive.

**Q10. If callback returns Promise?**

- These are synchronous; you’ll get array of promises or promise accumulator. Use `Promise.all` for async.

---

## Advanced Interview Code Examples

```js
// Group by category using reduce
const grouped = products.reduce((acc, prod) => {
  if (!acc[prod.category]) acc[prod.category] = [];
  acc[prod.category].push(prod);
  return acc;
}, {});
```

```js
// Most frequent element using reduce
function mostFrequent(arr) {
  const counts = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).reduce(
    (max, [elem, count]) => (count > max.count ? { elem, count } : max),
    { elem: null, count: 0 }
  ).elem;
}
```

---

## Best Practices

- Use arrow functions for concise syntax.
- Keep callbacks pure.
- Always provide initialValue in reduce.
- Chain thoughtfully (avoid unreadable chains).
- Use meaningful variable names (`acc`, `curr`, etc.).

---
