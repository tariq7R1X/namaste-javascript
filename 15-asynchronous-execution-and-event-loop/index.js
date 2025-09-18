console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");




/**
 * So this will first print the start statement,
 * then this will go to the end statment,
 * after that this will resolve the promise and will print the Promise,
 * and in last the setTimeout Statement will print the setTimeout,
 */