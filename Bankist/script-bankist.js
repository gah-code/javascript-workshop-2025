'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Looping Arrays: forEach

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('-------FOREACT------');
// ///// movement , index, arr
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You desposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

/////////////////////////////////////////////////

// The lecture focuses on looping through arrays using the forEach method and compares it with the for of loop. It starts with a simplified bank account data set, showcasing deposits and withdrawals, and demonstrates how to log each transaction using the for of loop.

// The forEach method, describing it as a higher-order function that requires a callback to be executed for each element in the array. This method automatically calls the callback, passing the current element and allows access to the current index and the entire array. The instructor clarifies the order of parameters in the callback, contrasting it with how the index is accessed in the for of loop.

// A key distinction is made regarding forEach, which cannot be exited prematurely like break or continue allows, making it ideal for processing the entire array. The lecture emphasizes practice with forEach, and understanding its callback will pave the way for mastering other array methods.

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// This lecture focuses on the use of the forEach method with maps and sets in programming. It begins by recalling the forEach method's application on arrays and transitions to its functionality with maps. Each entry in a map consists of a key and a value, allowing the forEach method to be called with a callback that accepts three parameters: the current value, the key, and the entire map. This structure is similar to that of arrays, making it easy to remember.

// The lecture demonstrates how to implement forEach on a map using a currencies map example, logging the key and value of each entry. It then shifts to sets, where the lecturer creates a new set called currenciesUnique, emphasizing that sets only contain unique values. When applying forEach to a set, the callback function still receives three parameters, but since sets don’t have keys, the key parameter is essentially the same as the value.

// To clarify, when logging values from the set, the key and value are identical. The lecturer recommends using an underscore for the key parameter, indicating it is unnecessary in this context. The lecture concludes by reinforcing that understanding the forEach method for arrays makes it straightforward to apply the same concept to maps and sets.
