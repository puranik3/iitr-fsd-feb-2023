import IPerson from './11-interface';

class Person implements IPerson {
    nationality = 'Indian';
    name: string;
    readonly age: number;
    spouse?: string;

    constructor( name : string, age : number, spouse? : string ) {
        this.name = name;
        this.age = age;
        
        if( spouse !== undefined ) {
            this.spouse = spouse;
        }
    }

    celebrateBirthday() {
        console.log( `Happy birthday ${this.name}` );
    }
}

const john = new Person( 'John', 32, 'Jane' );
const jane = new Person( 'Jane', 28 );

console.log( john );
console.log( jane );

export {}