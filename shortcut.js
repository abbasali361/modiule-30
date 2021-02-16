const money = 150;
const active = true;
let food;
if(money > 100){
    food = `biryani`;
}
else{
    food = `alur vorta`;
}

//ternary:
// condition ? true value: false value
let food = money > 100? 'biriyani' : 'alur vorta';

let cssClass;
if(active === true){
    cssClass = 'active';
}
else{
    cssClass = 'inactive';
}
const cssClass2 = active ? 'active' : 'inactive';

active ? displayUser(): hideUser()
// 
// active && displayUser
const x = active && 5;
const y = active || 5;
console.log (y);

// string to number
const numbers = +'45';
console.log(numbers);

// number to string
const numText = 45 + '';
console.log(numText);

// default parameter
function add ( num1, num2){
    num2 = num2 || 5;
    return num1 + num2;
}
add(45,10)