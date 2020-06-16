function echo(object: any) {
  return object;
}

console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ name: 'João', age: 27 }));

// Using generics
function echoEnhanced<T>(object: T): T {
  return object;
}

console.log(echoEnhanced<string>('João').length);
console.log(echoEnhanced<number>(27));
console.log(
  echoEnhanced<{ name: string; age: number }>({ name: 'João', age: 27 })
);

// Available generics on API
const myGrades: Array<number> = [10, 9.3, 7.7];
myGrades.push(8.4);
// myGrades.push('5.5');
console.log(myGrades);

// Array
function log<T>(...args: T[]) {
  args.forEach((element) => console.log(element));
}

log(1, 2, 3);
log<number>(1, 2, 3);
log<string>('A', 'B', 'C');
log<{ name: string; age: number }>(
  { name: 'John', age: 22 },
  { name: 'Doe', age: 33 },
  { name: 'Moe', age: 27 }
);

type Student = {
  name: string;
  age: number;
};

log<Student>(
  { name: 'John', age: 22 },
  { name: 'Doe', age: 33 },
  { name: 'Moe', age: 27 }
);

// Generic type
type Echo = <T>(data: T) => T;
const callEcho: Echo = echoEnhanced;
console.log(callEcho<string>('Something'));

// Class with generics
abstract class BinaryOperation<T, R> {
  constructor(public operand1: T, public operand2: T) {}

  abstract execute(): R;
}

class BinarySum extends BinaryOperation<number, number> {
  execute() {
    return this.operand1 + this.operand2;
  }
}

console.log(new BinarySum(3, 4).execute());
console.log(new BinarySum(30, 434).execute());

class DatesDiff extends BinaryOperation<CalendarDate, string> {
  getTime(date: CalendarDate): number {
    const { day, month, year } = date;
    return new Date(`${month}/${day}/${year}`).getTime();
  }

  execute() {
    const t1 = this.getTime(this.operand1);
    const t2 = this.getTime(this.operand2);

    const difference = Math.abs(t1 - t2);
    const dayInMs = 1000 * 60 * 60 * 24;

    return `${Math.ceil(difference / dayInMs)} dia(s)`;
  }
}

console.log(
  new DatesDiff(
    new CalendarDate(1, 1, 2000),
    new CalendarDate(28, 11, 1999)
  ).execute()
);

// Queue class challenge
// Attribute: queue (Array)
// Methods: push, next, print

class Queue<T extends number | string> {
  private queue: Array<T>;

  constructor(...args: T[]) {
    this.queue = args;
  }

  push(elem: T): void {
    this.queue.push(elem);
  }

  next(): T | undefined {
    return this.queue.shift();
  }

  print(): void {
    console.log(this.queue.join(', '));
  }
}

const workers = new Queue<string>('John', 'Doe', 'Joe', 'Koe');
workers.print();
workers.push('Newbie');
workers.print();
console.log(workers.next());
console.log(workers.next());
console.log(workers.next());
workers.print();

const numbersQueue = new Queue<number>(1, 2, 3);
numbersQueue.print();

// const booleanQueue = new Queue<boolean>(true, false);

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

interface IMapa<C, V> {
  chave: C;
  valor: V;
}

class Mapa<C, V> {
  private itens: IMapa<C, V>[] = [];

  colocar(mapa: IMapa<C, V>): void {
    const index = this.itens.findIndex((item) => item.chave === mapa.chave);

    if (index >= 0) {
      this.itens.splice(index, 1, mapa);
      return;
    }

    this.itens.push(mapa);
  }

  obter(chave: C): IMapa<C, V> | undefined {
    return this.itens.find((item) => item.chave === chave);
  }

  limpar(): void {
    this.itens = [];
  }

  imprimir(): void {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
