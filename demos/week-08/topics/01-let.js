// TAKEAWAY: Prefer 'let' when declaring variables
if( true ) {
    var x = 1; // no block scope (bad thing)
    let y = 2; // has block scope (good thing)
}

console.log( 'x = ', x );
console.log( 'y = ', y ); // error