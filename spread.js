/* Spread -> [...array] */

const spreadArray = function () {

    // push

    let arr1 = [1, 2, 3];

    arr1 = [...arr1, 4];

    console.log(`Push: ${arr1}`);

    // concat arrays

    let arr2 = [5, 6, 7];

    arr2 = [...arr1, ...arr2];

    console.log(`Concatenated Arrays: ${arr2}`);

    // splice

    let arr3 = [3, 4];

    arr3 = [0, 1, 2, ...arr3, 5, 6];

    console.log(`Splice: ${arr3}`);
}

spreadArray();

/* Spread -> {...object} */

const spreadObject = function () {

    const area = { name: 'Frontend' };
    const frameworks = { fram1: 'React', fram2: 'Vue', fram3: 'Angular' };

    // concat

    let ap = { ...area, ...frameworks };

    console.log(`Concat: ${JSON.stringify(ap)}`);

    // update

    ap = { ...ap, fram3: 'Angular7' }

    console.log(`Update: ${JSON.stringify(ap)}`);
};


spreadObject();
