const proto = {
    celebrateBirthday: function() {
        this.age++;
    }
};

const john = {
    name: 'John',
    age: 32,
    __proto__: proto
};

const jane = {
    name: 'Jane',
    age: 28,
    __proto__: proto
};

john.celebrateBirthday();
jane.celebrateBirthday();

console.log( john );
console.log( jane );