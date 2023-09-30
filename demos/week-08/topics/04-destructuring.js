const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const mon = days[0], tue = days[1], fri = days[4]
const [ mon, tue, , , fri ] = days;
console.log( mon, tue, fri );

const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka'
    },
    emails: [
        'john@gmail.com',
        'john@example.com'
    ]
};

// const name = john.name, age = john.age, city = john.address.city, secondaryEmail = john.emails[1];
const {
    name,
    age,
    address: {
        city
    },
    emails: [
        ,
        secondaryEmail
    ]
} = john;

console.log( name, age, city, secondaryEmail );