// ... -> rest ( 2 / 3 situations are covered here) / spread

const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

const [ mon, tue, ...restOfDays ] = days;
console.log( restOfDays );

const john = {
    name: 'John',
    age: 32,
    address: {
        city: 'Bengaluru',
        state: 'Karnataka',
        pinCode: 560100
    },
    emails: [
        'john@gmail.com',
        'john@example.com'
    ]
};

const {
    name,
    address: {
        city,
        ...restOfAddress
    },
    ...restOfDetails
} = john;
console.log( restOfDetails, restOfAddress );