import { Person } from './09-class.mjs';

class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( `Happy birthday ${this.name}!` );
    }
};

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );

john.promote();
john.celebrateBirthday();

console.log( john );