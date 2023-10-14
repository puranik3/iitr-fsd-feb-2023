type Person = {
    name: string,
    readonly age: number,
    spouse?: string
};

const john = {
    name: 'John',
    age: 32
};

// john.spouse = 'Jane'; // error
// john.age = 'Thirty three'; // error

// let jane : {
//     name: string,
//     readonly age: number,
//     spouse?: string
// };

let jane : Person;

// jane.spouse = 'John';
// jane.age = 'Twenty Eight';

jane = {
    name: 'Jane',
    age: 28,
    spouse: 'John'
};

// jane.age++; // error

// ArrayList<String> list = new ArrayList<String>()