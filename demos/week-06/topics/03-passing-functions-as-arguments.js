// Functions are "first-class citizens"
// You can do with a function anything you can do with an object
function printPerson( person, getTitle ) {  
    const title = getTitle( person );
    console.log( title + ' ' + person.name + ' is ' + person.age + ' years old' );
}

const john = {
    "name": 'John',
    age: 32,
    gender: 'm'
};

const jane = {
    name: 'Jane',
    age: 28,
    gender: 'f'
};

function getEnglishTitle(p) {
    return p.gender === 'm' ? 'Mr.' : 'Ms.'
}

function getFrenchTitle(person) {
    return person.gender === 'm' ? 'Monsieur' : 'Madame'
}

// person = john
// bar = foo
printPerson( john, getEnglishTitle );
printPerson( jane, getFrenchTitle );