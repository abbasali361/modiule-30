//json
const person = {
    name: 'abdul',
    age: 25,
    district: 'Dhaka',
    salary: 2500
};
// console.log(JSON.stringify(person));
// JSON convert back and forth
const data = (JSON.stringify(person));
const dataParsed = JSON.parse(data);
console.log(dataParsed.name);

// API
// fetch('url')
// .then(res => res.json)
// .then(data => console.log(data)):

//local storage
//localStorage.setItem('userId',  1245);

const userId = localStorage.getItem('userId');
// console.log(userId);
localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const parsePerson = JSON.parse(storedPerson);
console.log(storedPerson);

const keys = Object.values(parsePerson);
console.log(values);