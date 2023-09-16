// this (context)
console.log( this );

function foo() {
    console.log( this );
}

foo();

function sum( x, y ) {
    console.log( 'context is ', this );
    return x + y;
}

// sum() with a different context
// sum.call( null, 12, 13 )
sum.call( { name: 'John' }, 12, 13 );

// borrowing methods
const john = {
    name: 'John',
    age: 32,
    celebrateBirthday: function() {
        this.age++;
    }
};

john.celebrateBirthday();
console.log( john );

const jane = {
    name: 'Jane',
    age: 28
};

john.celebrateBirthday.call(jane); // Because this is jane, it will do jane.age++

console.log( jane );