// Exercício 1 - Classe
// function Moto(nome) {
//   this.nome = nome;
//   this.velocidade = 0;

//   this.buzinar = function () {
//     console.log('Toooooooooot!');
//   };

//   this.acelerar = function (delta) {
//     this.velocidade = this.velocidade + delta;
//   };
// }

class Moto {
  public velocidade: number = 0;

  constructor(public nome: string) {}

  buzinar() {
    console.log('Toooooooooot!');
  }

  acelerar(delta: number) {
    this.velocidade = this.velocidade + delta;
  }
}

const moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);

// Exercício 2 - Herança
// var objeto2D = {
//   base: 0,
//   altura: 0,
// };

// var retangulo = Object.create(objeto2D);
// retangulo.base = 5;
// retangulo.altura = 7;
// retangulo.area = function () {
//   return this.base * this.altura;
// };

abstract class Objeto2D {
  constructor(protected base: number = 0, protected altura: number = 0) {}

  abstract area(): number;
}

class Retangulo extends Objeto2D {
  constructor(base: number, altura: number) {
    super(base, altura);
  }

  area(): number {
    return this.base * this.altura;
  }
}

const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());

// Exercício 3 - Getters & Setters
// var estagiario = {
//   _primeiroNome: '',
// };

// Object.defineProperty(estagiario, 'primeiroNome', {
//   get: function () {
//     return this._primeiroNome;
//   },
//   set: function (valor) {
//     if (valor.length >= 3) {
//       this._primeiroNome = valor;
//     } else {
//       this._primeiroNome = '';
//     }
//   },
//   enumerable: true,
//   configurable: true,
// });

class Estagiario {
  private _primeiroNome: string = '';

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(nome: string) {
    if (nome.length >= 3) {
      this._primeiroNome = nome;
    } else {
      this._primeiroNome = '';
    }
  }
}

const estagiario = new Estagiario();
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
