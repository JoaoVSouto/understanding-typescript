interface Human {
  name: string;
  age?: number;
  greet(surname: string): void;
  [prop: string]: any;
}

function greetWithHi(person: Human): void {
  console.log(`Hi ${person.name}`);
}

function changeName(person: Human): void {
  person.name = 'Joe';
}

const person: Human = {
  name: 'John',
  age: 20,
  greet(surname: string) {
    console.log(`Hello my name is ${this.name} ${surname}`);
  },
};

greetWithHi(person);
person.greet('Doe');
changeName(person);
greetWithHi(person);
person.greet('Veras');
// greetWithHi({
//   name: 'Jonas',
//   age: 27,
//   height: 1.75,
// });

// Using classes...
class Client implements Human {
  readonly lastPurchase: Date = new Date();

  constructor(public name: string) {}

  greet(surname: string) {
    console.log(`Hello my name is ${this.name} ${surname}`);
  }
}

const myClient = new Client('Han');
greetWithHi(myClient);
myClient.greet('Solo');
console.log(myClient.lastPurchase);

// Function interface
interface CalcFunction {
  (a: number, b: number): number;
}

const power: CalcFunction = (base: number, exp: number): number =>
  Array(exp)
    .fill(base)
    .reduce((total, current) => total * current);

console.log(power(2, 10));

// Heritage
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}

  b(): void {}
}

class RealABC implements ABC {
  a(): void {}

  b(): void {}

  c(): void {}
}

abstract class AbstractABD implements A, B {
  a(): void {}

  b(): void {}

  abstract d(): void;
}

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
  name: 'Pedro',
  toString() {
    return this.name;
  },
};

cli.log();
