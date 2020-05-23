// let & const
let willItWork = '?';
console.log(willItWork);

let isCold = true;

if (isCold) {
  let action = 'Put a jacket!';
  console.log(action);
}

const cpf: string = '123.456.789-09';
// cpf = '293.123.532-43';
console.log(cpf);

var secret = 'external';
function reveal() {
  const secret = 'internal';
  console.log(secret);
}
reveal();
console.log(secret);

{
  const def = 'def';
  console.log(def);
}

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}
// console.log(i);

// Arrow Function
function sumFunc(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(sumFunc(2, 2));

const subtract = (n1: number, n2: number) => n1 - n2;
console.log(subtract(2, 3));

const greetings = () => console.log('hello');
greetings();

const talkTo = (person: string) => console.log(`Hello ${person}`);
talkTo('Joe');

// this

// function normalWithThis() {
//   console.log(this);
// }
// normalWithThis();

// const normalWithThisSpecial = normalWithThis.bind({
//   name: 'John',
// });
// normalWithThisSpecial();

// const arrowWithThis = () => console.log(this);
// arrowWithThis();

// const arrowWithThisSpecial = arrowWithThis.bind({
//   name: 'John',
// });
// arrowWithThisSpecial();

// Default parameter
function countdown(start: number = 5, end: number = start - 5): void {
  console.log(start);

  while (start > end) {
    start -= 1;
    console.log(start);
  }

  console.log('Done');
}

countdown();
countdown(3);

// Rest & spread
const numbers: number[] = [1, 10, 99, -5];
console.log(Math.max(...numbers));

const classA: string[] = ['John', 'Mary', 'Ferdinand'];
const classB: string[] = ['Doe', ...classA, 'Log', 'You'];
console.log(classB);

function returnArray(...args: number[]): number[] {
  return args;
}

const numbersArr = returnArray(1, 2, 3, 4, 5, 6);
console.log(numbersArr);
console.log(returnArray(...numbers));

// Rest & spread (tuple)
const tuple: [number, string, boolean] = [1, 'abc', false];

function tupleParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tupleParam1(...tuple);

function tupleParam2(...params: [number, string, boolean]): void {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tupleParam2(...tuple);

// Destructuring (array)
const characteristics = ['Zetec motor 1.8', 2020];
// const motor = characteristics[0];
// const year = characteristics[1];

const [motor, year] = characteristics;

console.log(motor, year);

// Destructuring (object)
const item = {
  name: 'SSD 480GB',
  price: 200,
  specs: {
    imported: true,
  },
};

// const itemName = item.name;
// const itemPrice = item.price;

const {
  name: itemName,
  price: itemPrice,
  specs: { imported },
} = item;

console.log(itemName, itemPrice, imported);

// Template string
const userID: string = 'Cod3r';
const notifications: string = '10';
// const greetingsMsg: string =
//   'Greetings ' + userID + '\nNotifications: ' + notifications;
const greetingsMsg: string = `Greetings ${userID}
Notifications: ${+notifications > 9 ? '+9' : notifications}`;
console.log(greetingsMsg);

// Ecmascript challenges

// Exercise 1
// var double = function (value) {
//   return value * 2;
// };
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2
// var sayHello = function (name) {
//   if (name === undefined) {
//     name = 'Person';
//   }
//   console.log('Hello, ' + name);
// };
const sayHello = (name: string = 'Person') => console.log(`Hello, ${name}`);
sayHello();
sayHello('John');

// Exercise 3
const nums: number[] = [-3, 33, 38, 5];
// Print the lowest value
console.log(Math.min(...nums));

// Exercise 4
const array: number[] = [55, 20, ...nums];
// Add all the elements of nums in array
console.log(array);

// Exercise 5
// var grades = [8.5, 6.3, 9.4];
// var grade1 = grades[0];
// var grade2 = grades[1];
// var grade3 = grades[2];
const grades: number[] = [8.5, 6.3, 9.4];
const [grade1, grade2, grade3] = grades;
console.log(grade1, grade2, grade3);

// Exercise 6
const scientist: {
  firstName: string;
  experience: number;
} = {
  firstName: 'Will',
  experience: 12,
};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const { firstName, experience } = scientist;
console.log(firstName, experience);

// Callbacks
function wait3s(callback: (arg0: string) => void) {
  setTimeout(() => {
    callback('3s later...');
  }, 3000);
}

// wait3s((data: string) => {
//   console.log(data);
// });

function wait3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('3s later (promised)...');
    }, 3000);
  });
}

// wait3sPromise().then(console.log);

// fetch('https://dog.ceo/api/breed/hound/images/random')
//   .then((res) => res.json())
//   .then(console.log);
