// for providing a contract on the public-facing API of a class
// an interface can be used to specify the data type for an object
interface IPerson {
    name: string,
    readonly age: number,
    spouse?: string,
    celebrateBirthday: () => void
}

let john : IPerson;

john = {
    name: 'John',
    age: 32,
    celebrateBirthday() {
        console.log( `Happy birthday ${this.name}` );
    }
}

export default IPerson;