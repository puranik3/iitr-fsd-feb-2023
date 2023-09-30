// const - reassignment of the variable is not allowed
const gstSlab2 = 0.18;

const totalPrice = 120 + 120 * gstSlab2;
const totalPrice2 = 1000 + 1000 * gstSlab2;

// gstSlab2 = 28; // error

const john = {
    name: 'John',
    age: 32
};

john.age++;
john.name = 'Jonathan';

console.log( john );

// error
john = {
    name: 'John',
    age: 34
};