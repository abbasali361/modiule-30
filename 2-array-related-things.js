const numbers = [2, 4, 5, 7, 5];
const friends = ['abbas','ali','mondol'];
const products = [
    {id: 1, name: 'laptop', price: 500},
    {id: 2, name: 'phone', price: 200},
    {id: 3, name: 'watch', price: 300},
    {id: 4, name: 'tablet', price: 100}
];

//map
const names = products.map(product => product.name);
const prices = products.map(pd => pd.price);
console.log(names);
const prices2 = products.map(pd => {
    return pd.price;
})
console.log(prices2);

// forEach
products.forEach(product => console.log(product.name));

const cheaper = products.filter(pd => pd.price < 100);
console.log(cheaper);

// remove an item using filter
const remaining = products.filter(pd => pd.id != 3);
console.log(remaining);

// find
const hasWatch = products.find(pd.name === 'watch');
console.log(hasWatch);

// reduce
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// includes
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// push
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// pop
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]

// length
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach(element => console.log(element));
// 1
// 2


// indexOf
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1