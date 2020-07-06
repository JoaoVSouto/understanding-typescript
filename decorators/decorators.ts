function logClass(constructor: Function) {
  console.log(constructor);
}

function emptyDecorator(_: Function) {}

function logClassIf(value: boolean) {
  return value ? logClass : emptyDecorator;
}

function decorator(obj: { a: string; b: number }) {
  return function (_: Function): void {
    console.log(`${obj.a} ${obj.b}`);
  };
}

type Constructor = {
  new (...args: any[]): {};
};

function logObject(constructor: Constructor) {
  console.log('Loaded...');
  return class extends constructor {
    constructor(...args: any[]) {
      console.log('Before...');
      super(...args);
      console.log('After...');
    }
  };
}

// new HomeAppliance();
// new HomeAppliance();
// new HomeAppliance();

interface HomeAppliance {
  log?(): void;
}

// @logClass
// @logClassIf(true)
// @decorator({ a: 'Teste', b: 123 })
// @logObject
@loggable
class HomeAppliance {
  constructor() {
    console.log('HomeAppliance constructor...');
  }
}

function loggable(constructor: Function) {
  constructor.prototype.log = function () {
    console.log(this);
  };
}

// (<any>new HomeAppliance()).log();
const homeAppliance = new HomeAppliance();
homeAppliance.log && homeAppliance.log();

interface LoggedUser {
  name: string;
  email: string;
  admin: boolean;
}

// Desafio Decorator perfilAdmin
const usuarioLogado: LoggedUser = {
  name: 'Guilherme Filho',
  email: 'guigui@gmail.com',
  admin: true,
};

@perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log('Algo crítico foi alterado!');
  }
}

// function perfilAdmin(loggedUser: LoggedUser) {
//   if (!loggedUser || !loggedUser.admin) {
//     throw new Error('Usuário não é um administrador do sistema');
//   }

//   return function (_: Function) {};
// }

function perfilAdmin<T extends Constructor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);

      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error('Sem permissão!');
      }
    }
  };
}

new MudancaAdministrativa().critico();

class CheckingAccount {
  @nonNegative
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  @freeze
  withdraw(@paramInfo value: number) {
    if (value <= this.balance) {
      this.balance -= value;
      return true;
    }

    return false;
  }

  @freeze
  getBalance() {
    return this.balance;
  }
}

const account = new CheckingAccount(10248.57);
account.withdraw(5000);
account.withdraw(5248.57);
account.withdraw(0.1);
console.log(account.getBalance());

// account.getBalance = function () {
//   return this['balance'] + 7000;
// };

// console.log(account.getBalance());

function freeze(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log('target', target);
  console.log('methodName', methodName);
  descriptor.writable = false;
}

function nonNegative(target: any, attributeName: string) {
  Object.defineProperty(target, attributeName, {
    get(): any {
      return target[`_${attributeName}`];
    },
    set(value: any): void {
      if (value < 0) {
        throw new Error(`Negative value not permitted on ${attributeName}!`);
      }

      target[`_${attributeName}`] = value;
    },
  });
}

function paramInfo(target: any, methodName: string, paramIndex: number) {
  console.log(`Target: ${target}`);
  console.log(`Method: ${methodName}`);
  console.log(`Parameter index: ${paramIndex}`);
}
