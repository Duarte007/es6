/* arrow function */

// no param

const foo = () => {
    console.log('Arrow function here');
};

// one param

const bar = param => {
    console.log(`Arrow function with one param: ${param}`);
};

// more than one param

const baz = (param1, param2) => {
    console.log(`Arrow function with more than one param: ${param1} ; ${param2}`)
};

foo();

bar("I'm param");

baz("Param one", "Param two");

const qux = [1, 2, 3, 4, 5, 6];

const filtered = qux.filter(num => { return num % 2 === 0 });

console.log(`Filtered: ${filtered}`);

const maped = qux.map(num => { return num * 2 });

console.log(`Maped: ${maped}`);
