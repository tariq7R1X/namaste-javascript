// BLOCK SCOPE

// {
//   let a = 10;
//   const b = 20;
// }
// console.log(a); // ❌ ReferenceError

// SHADOWING

let a = 100;
{
  let a = 200;
  console.log(a); // 🔹 200 (inner shadows outer)
}
console.log(a); // 🔹 100 (outer still intact)

// ILLEGAL SHADOWING

// let a = 10;
// {
//   var a = 20;
// }

// ❌ SyntaxError: Identifier 'a' has already been declared

// var is function-scoped:

function test() {
  var x = 1;
  if (true) {
    var x = 2; // same variable
    console.log(x); // 2
  }
  console.log(x); // 2
}
