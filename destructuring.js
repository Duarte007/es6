/* Destructuring Objects */

const person = {
    firstName: "Matheus",
    lastName: "Duarte",
    age: 20,
    city: "Belo Horizonte"
};

const { firstName, lastName: ln } = person;

console.log(`${firstName} ${ln}`);

/* Destructuring Arrays */

let [name, age] = ["Matheus Duarte", "20", "Belo Horizonte"];

console.log(`${name}, ${age} years old.`);