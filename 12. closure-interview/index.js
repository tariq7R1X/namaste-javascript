//  Closures allow you to create private variables. 
//  Data Hidding 

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.get());      // 1
