/*
    We discussed writing functions and converting them to arrow functions
    as a way to understand how to write them. I've included a basic example
    of some conversions.

    Note: These are topics that we will cover, but I want you to do some
    research on Function Declarations vs Function Expressions. You'll also
    want to look into how the `this` keyword behaves between the two.

    When in doubt, log it out...
*/
function sayHello(name) {
    console.log(`Hello, ${name}`);
}

const sayHello = (name) => {
    console.log(`Hello, ${name}`);
};

function add(left, right) {
    return left + right;
}

const add = (left, right) => {
    return left + right;
};
