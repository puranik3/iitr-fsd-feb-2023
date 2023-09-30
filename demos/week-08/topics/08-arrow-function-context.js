// Run this code in the browser
function outer() {
    console.log( 'this (outer) ', this );

    const old = function() {
        console.log( 'this (old) ', this );
    };

    old();

    // Arrow functions do not have a context of their own
    // they simply "borrow the context from the enclosing scope"
    // When you want to use the context of the enclosing scope, declare the inner function using arrow function syntax
    const arrow = () => {
        console.log( 'this (arrow) ', this );
    };

    arrow();
}

outer.call( { name: 'john' } );