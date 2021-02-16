// array destructuring 

const numbers = [45, 92];
// const x = numbers[0];
// const y = numbers[1];
// const [x,y]= [54,92];
// console.log(x,y);
const [x,y]= numbers;

function boxify(num1){
    return [num1, num1 + 5];
}
const [box1, box2] = boxify(8);
console.log(box1, box2);

// object destructuring

const [name, age]= {id: 2, money: 34, name: 'Rahim', age: 25}
console.log(name,age);
console.log(name,age);
console.log(name,age);

// create object shortcut
const one = 25;
const two = 35;
const obj = {x: y, y:y};
const obj2 = {one, two};
console.log(obj2);


// nwe array using three dots
numbers.push(56);
const newNumbers = [...numbers, 56]