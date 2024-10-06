const numbers = [1, 2, 3, 4,5];
const squared = numbers.map(num => num * num);
console.log(squared);

const number = [1, 2, 3, 4];
const sum = number.reduce((acc, num) => acc + num, 0);
console.log(sum);

const Numbers = [1, 2, 3, 4, 5, 6];
const firstEven = Numbers.find(num => num % 2 === 0);
console.log(firstEven);

const fruits = ["apple", "banana","cherry"];
const copyFruits = [...fruits];
console.log(copyFruits);


const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined);

const Number = [4, 2, 3, 1];
const sortNumbers = Number.sort((a, b) => a - b);
console.log(sortNumbers);
