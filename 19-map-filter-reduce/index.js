// const users = [
//   { firstName: "ali", lastName: "ahmed", age: 5 },
//   { firstName: "khan", lastName: "mohd", age: 15 },
//   { firstName: "Rukhsana", lastName: "Riaz", age: 4 },
//   { firstName: "faiz", lastName: "mohd", age: 5 },
// ];

// const getAgeGroup = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(getAgeGroup);

/**
 * ======================
 * Get Full Name Of Users
 * ======================
 */
// const users = [
//   { firstName: "ali", lastName: "ahmed", age: 5 },
//   { firstName: "khan", lastName: "mohd", age: 15 },
//   { firstName: "Rukhsana", lastName: "Riaz", age: 4 },
//   { firstName: "faiz", lastName: "mohd", age: 5 },
// ];

// const getFullName = users.map((user) => user.firstName + " " + user.lastName);
// console.log(getFullName);

/**
 * ===========================================================
 * Get FirstName Of Users Age Less Then 10 With MAP and FILTER
 * ===========================================================
 */

// const users = [
//     {firstName: "ali", lastName:"ahmed", age:5},
//     {firstName: "khan", lastName:"mohd", age:15},
//     {firstName: "Rukhsana", lastName:"Riaz", age:14},
//     {firstName: "faiz", lastName:"mohd", age:5},
//     {firstName: "zain", lastName:"ali", age:7},

// ];

// const getFirstName = users.filter(x=> x.age<10).map(user=>user.firstName)
// console.log(getFirstName);

/**
 * ===================================================
 * Get FirstName Of Users Age Less Then 10 with REDUCE
 * ===================================================
 */

const users = [
  { firstName: "ali", lastName: "ahmed", age: 5 },
  { firstName: "khan", lastName: "mohd", age: 15 },
  { firstName: "Rukhsana", lastName: "Riaz", age: 14 },
  { firstName: "faiz", lastName: "mohd", age: 5 },
  { firstName: "zain", lastName: "ali", age: 7 },
];

const getFirstName = users.reduce((acc, curr) => {
  if (curr.age < 10) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(getFirstName);
