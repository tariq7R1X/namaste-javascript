let a=10;
console.log(a);

console.log(b);

// ✅ This works safely even if y is not declared, because typeof avoids ReferenceError.
if (typeof y !== "undefined") {
  console.log("y is declared");
}
