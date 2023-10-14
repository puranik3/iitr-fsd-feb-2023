// data type for function
    // data type for arguments
    // data type for return value

// 2 syntaxes for typing functions
// syntax 1
// the return type is inferred in this syntax
function sum1( x : number, y : number ) /*: number */ {
    if( Math.random() < 0.5 ) {
        return x + y;
    } else {
        return 'hello'
    }
}

// syntax 2
// const multiply = ( x : number , y : number ) : number => x * y;

// no type information in the RHS of the assignment
type BinaryFunction = ( a : number, b : number ) => number;
const multiply : BinaryFunction = ( x , y ) => x * y;
const subtract : BinaryFunction = ( x, y ) => x - y;

// Where syntax 2 is really helpful, is when we need to provide data type for a function passed as an argument to another function