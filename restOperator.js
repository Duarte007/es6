const add = function (num) {
    console.log(num);
    console.log(arguments);
}

add(4);

add(1, 2, 3, 4);

const newAdd = function (...num) {
    console.log(`Rest Operator: ${num}`);
}

newAdd(1, 2, 3, 4);
