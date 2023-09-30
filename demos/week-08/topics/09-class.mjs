export class Person {
    nationality = 'Indian';

    constructor( name, age, nationality ) {
        this.name = name;
        this.age = age;

        if( nationality ) {
            this.nationality = nationality;
        }
    }

    celebrateBirthday() {
        this.age++;
    }
}

const john = new Person( 'John', 32, 'American' );
john.celebrateBirthday();

console.log( john );

// export {
//     john,
//     Person
// }