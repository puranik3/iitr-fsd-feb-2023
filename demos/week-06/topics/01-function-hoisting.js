// 2 main old syntaxes for defining a function
const result1 = sum1( 12, 13 );
console.log( result1 );

// function declaration - the runtime creates the function even before executing a single line of code
// these functions ae "hoisted"
function sum1( x, y ) {
    const result = x + y;
    return result;
}

// function expression - creates the function just in time
// const x = 1;
// x = 2;

// error - please uncomment and check the error
// const result2 = sum2( 12, 13 );
// console.log( result2 );

const sum2 = function( x, y ) {
    const result = x + y;
    return result;
};