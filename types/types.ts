// string
let myName = 'João';
console.log(myName);
// WRONG: Typescript infer the variable type on the moment of its definition
// myName = 28;

// numbers
let age = 27;
// age = 'Ana';
age = 27.5;
console.log(age);

// boolean
let hasHobbies = false;
// hasHobbies = 1;
console.log(hasHobbies);

// explicit types
let myAge: number;
myAge = 20;
console.log(typeof myAge);
// myAge = '20';

// array
let hobbies: any[] = ['Cook', 'Play Sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);

// tuples
let address: [string, number, string] = ['Main Av', 99, ''];
console.log(address);
address = ['Important Av', 1260, 'C Block'];
console.log(address);

// enums
enum Color {
  Gray,
  Green = 100,
  Blue = 10,
  Orange,
  Yellow,
  Red = 100,
}

let myColor: Color = Color.Green;
console.log(myColor);
console.log(Color.Blue);
console.log(Color.Orange, Color.Yellow);
console.log(Color.Red);

// any
let car: any = 'BWM';
console.log(car);
car = {
  brand: 'BMW',
  year: 2020,
};
console.log(car);

// functions
function returnsMyName(): string {
  // return myAge;
  return myName;
}
console.log(returnsMyName());

function sayHi(): void {
  console.log('Hi!');
  // return myAge;
}
sayHi();

function multiply(n1: number, n2: number): number {
  return n1 * n2;
}
// console.log(multiply(2, 'What'));
console.log(multiply(2.5, 3));

// function type
let calc: (arg0: number, arg1: number) => number;
// calc = sayHi;
// calc();

calc = multiply;
console.log(calc(5, 6));

// objects
let user: { name: string; age: number } = {
  name: 'João',
  age: 20,
};
console.log(user);

// user = {};

// user = {
//   nome: 'Mayra',
//   idade: 19,
// };

user = {
  age: 19,
  name: 'Mayra',
};
console.log(user);

// Challenge
/*
 * Create an employee object with:
 * - Array of strings with the name of the supervisors
 * - Function of punching the clock that receives an hour (number) and returns a string
 *   -> Normal time (<= 8)
 *   -> Out of time (> 8)
 */

// Alias
type Employee = {
  supervisors: string[];
  punchTheClock: (hour: number) => string;
};

const employee: Employee = {
  supervisors: ['Mike', 'Luke'],
  punchTheClock(hour: number): string {
    if (hour <= 8) return 'Normal time';
    return 'Out of time';
  },
};

const employee2: Employee = {
  supervisors: ['Carlos', 'Adam'],
  punchTheClock(hour: number): string {
    if (hour <= 8) return 'Normal time';
    return 'Out of time';
  },
};
console.log(employee.supervisors);
console.log(employee.punchTheClock(8));
console.log(employee.punchTheClock(9));

// Union types
let grade: number | string = 10;
console.log(`My grade is ${grade}!`);
grade = '10';
console.log(`My grade is ${grade}!`);
// grade = true;

// Checking types
let value = 30;

if (typeof value === 'number') {
  console.log("It's a number!");
} else {
  console.log(typeof value);
}

// never
function fails(msg: string): never {
  throw new Error(msg);
}

const product = {
  name: 'Soap',
  price: 4,
  validateProduct() {
    if (!this.name || this.name.trim().length === 0) {
      fails('It needs to have a name');
    }

    if (this.price <= 0) {
      fails('Invalid price');
    }
  },
};

product.validateProduct();

// optative values with null type
let height = 12;
// height = null;

let optativeHeight: null | number = 12;
optativeHeight = null;

type Contact = {
  name: string;
  tel1: string;
  tel2: string | null;
};

const contact1: Contact = {
  name: 'John',
  tel1: '3923289',
  tel2: null,
};

console.log(contact1.name);
console.log(contact1.tel1);
console.log(contact1.tel2);

let canBeNull = null; // canBeNull: any
canBeNull = 12;
console.log(canBeNull);
canBeNull = 'abc';
console.log(canBeNull);

// Challenge²
type BankAccount = {
  balance: number;
  deposit: (value: number) => void;
};

const bankAccount: BankAccount = {
  balance: 3456,
  deposit(value: number) {
    this.balance += value;
  },
};

const accountHolder: {
  name: string;
  bankAccount: BankAccount;
  contacts: string[];
} = {
  name: 'John Doe',
  bankAccount,
  contacts: ['34567890', '98765432'],
};

accountHolder.bankAccount.deposit(3000);
console.log(accountHolder);
