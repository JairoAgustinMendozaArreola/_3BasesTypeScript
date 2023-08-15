


export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = 'No Address'
        ) {}
}

const ironman = new Person('IronMman');

console.log(ironman);