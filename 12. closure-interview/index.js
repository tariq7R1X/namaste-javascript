//  Closures allow you to create private variables.
//  Data Hidding

// function createCounter() {
//   let count = 0;
//   return {
//     increment: () => ++count,
//     get: () => count,
//   };
// }

// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.get());


// example-02
function outer() {
  const a = 10;
  return function inner() {
    console.log(a);
  };
}

outer()();
// double parenthese will call outer function and also inner function