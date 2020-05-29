class CalendarDate {
  // Public by default
  day: number;
  public month: number;
  year: number;

  constructor(day: number = 1, month: number = 1, year: number = 1970) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const birthday = new CalendarDate(16, 1, 2007);
birthday.day = 4;
console.log(birthday.day);
console.log(birthday);

const wedding = new CalendarDate();
wedding.year = 2017;
console.log(wedding);

class SmartDate {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970
  ) {}
}

const smartBirthday = new SmartDate(16, 1, 2007);
smartBirthday.day = 4;
console.log(smartBirthday.day);
console.log(smartBirthday);

const smartWedding = new SmartDate();
smartWedding.year = 2017;
console.log(smartWedding);

// Product class challenge
// Attributes: name, price and discount
// Create the constructor
// Obs. 1: Discount is opcional (default value = 0)
// Obs. 2: Create two products: passing two and three parameters

class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0
  ) {
    if (discount < 0 || discount > 1) {
      throw new Error('Discount value must be between 0 and 1');
    }
  }

  // also public
  priceWithDiscount(): number {
    return this.price * (1 - this.discount);
  }

  public summary(): string {
    return `${this.name} costs $${this.priceWithDiscount().toFixed(2)} (${
      this.discount * 100
    }% off)`;
  }
}

const product1 = new Product('Notebook', 2999);
product1.discount = 0.05;
console.log(product1.summary());

const product2 = new Product('Dishwasher', 399, 0.1);
console.log(product2.summary());

class Car {
  private currentSpeed: number = 0;

  constructor(
    public brand: string,
    public model: string,
    private maxSpeed: number = 200
  ) {}

  protected changeSpeed(delta: number): number {
    const newSpeed = this.currentSpeed + delta;
    const isValidSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;

    if (isValidSpeed) {
      this.currentSpeed = newSpeed;
    } else {
      this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
    }

    return this.currentSpeed;
  }

  public accelerate(): number {
    return this.changeSpeed(5);
  }

  public brake(): number {
    return this.changeSpeed(-5);
  }
}

const car1 = new Car('Ford', 'Ka', 185);

Array(50)
  .fill(0)
  .forEach(() => car1.accelerate());
console.log(car1.accelerate());

Array(36)
  .fill(0)
  .forEach(() => car1.brake());
console.log(car1.brake());

// Simulating "errors"
// car1.currentSpeed = 300;
// console.log(`current speed -> ${car1.currentSpeed}`);

// car1.maxSpeed = 500;
// console.log(`max speed -> ${car1.maxSpeed}`);

// car1.changeSpeed(150);
// console.log(`current speed -> ${car1.currentSpeed}`);

class Ferrari extends Car {
  constructor(model: string, maxSpeed: number) {
    super('Ferrari', model, maxSpeed);
  }

  public accelerate(): number {
    return this.changeSpeed(20);
  }

  public brake(): number {
    return this.changeSpeed(-15);
  }
}

const f40 = new Ferrari('F40', 324);
console.log(`${f40.brand} ${f40.model}`);
console.log(f40.accelerate());
console.log(f40.brake());

// Getters & Setters
class Person {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    if (age >= 0 && age <= 120) {
      this._age = age;
    }
  }
}

const person1 = new Person();
person1.age = 10;
console.log(person1.age);

person1.age = -3;
console.log(person1.age);

// Static methods & attributes
class MathSubject {
  static PI: number = Math.PI;

  static circArea(radius: number): number {
    return MathSubject.PI * radius ** 2;
  }
}

// const m1 = new MathSubject();
// m1.PI = 4.2;
// console.log(m1.circArea(4));

console.log(MathSubject.circArea(4));

// Abstract class
abstract class Calc {
  protected result: number = 0;

  abstract exec(...numbers: number[]): void;

  getResult(): number {
    return this.result;
  }
}

class Sum extends Calc {
  exec(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t + a);
  }
}

class Multiply extends Calc {
  exec(...numbers: number[]): void {
    this.result = numbers.reduce((t, a) => t * a);
  }
}

const c1: Calc = new Sum();
c1.exec(2, 3, 4, 5);
console.log(c1.getResult());

const c2: Calc = new Multiply();
c2.exec(2, 3, 4, 5);
console.log(c2.getResult());

// Private constructor & Singleton
class Unique {
  private static instance: Unique = new Unique();

  private constructor() {}

  static getInstance(): Unique {
    return Unique.instance;
  }

  now(): Date {
    return new Date();
  }
}

// const wrong = new Unique();
console.log(Unique.getInstance().now());

// Read-only attributes
class Airplane {
  public readonly model: string;

  constructor(model: string, public readonly prefix: string) {
    this.model = model;
  }
}

const turboprop = new Airplane('Tu-114', 'PT-ABC');
// turboprop.model = 'DC-8';
// turboprop.prefix = 'PT-DEF';
console.log(turboprop);
