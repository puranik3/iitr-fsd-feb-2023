// iterator methods
const persons = [
    { name: 'John', age: 32, city: 'Bangalore' },
    { name: 'Jane', age: 28, city: 'Bangalore' },
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
    { name: 'David', age: 60, city: 'Delhi' }
];

// increase age of every person and log the person object
// forEach()
persons.forEach(
    // first argument passed is the item
    // second argument passed is the index
    function( p, index ) {
        p.age++;
        console.log( p, index );
    }
);


// we want an array of names of persons
// [ 'John', 'Jane', 'Mark', 'Mary', 'David' ]
// map()
const names = persons.map(
    function( person ) {
        return person.name;
    }
);

console.log( 'names = ', names );

// we want an array of persons living in Hyderabad
/**
[
    { name: 'Mark', age: 40, city: 'Hyderabad' },
    { name: 'Mary', age: 44, city: 'Hyderabad' },
]
*/
const hyderabadis = persons.filter(
    function( person ) {
        return person.city === 'Hyderabad'
    }
);
console.log( 'hyderbadis = ', hyderabadis );

// we want the first person living in Hyderabad
// { name: 'Mark', age: 40, city: 'Hyderabad' }



// get an array of all persons living in 'Hyderabad'
/**
 * Step 1
    [
        { name: 'Mark', age: 40, city: 'Hyderabad' },
        { name: 'Mary', age: 44, city: 'Hyderabad' },
    ]
 * Step 2
    [ 'Mark', 'Mary' ]
*/