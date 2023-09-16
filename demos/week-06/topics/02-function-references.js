function sum( x, y ) {
    return x + y;
}

let x = 1;
let y = x;

// function can have many references
// IT DOES NOT EXECUTE THE FUNCTION
const add = sum;

console.log( add( 12, 13 ) ); // THIS EXECUTES THE FUNCTION