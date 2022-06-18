// public

/*
    - Modificador padrão (não é necessário informar)
*/
class Vehicle   {
    public color: string;

    public constructor(color: string) {
        this.color = color;
    }

    public openTheDoor(): boolean    {
        return false;
    }
}

const car = new Vehicle("Branco");
console.log(car.color);

car.color = "Preto";
console.log(car.color);

console.log(car.openTheDoor());

// protected
class Residence     {
    public color: string;
    public address: object;

    constructor(color: string, address: object) {
        this.color = color;
        this.address = address;
    }

    public playIntercom(): string {
        return "Interfone tocado!";
    }
}

// O método construtor, para classes extendidas, não é obrigatório
class House extends Residence   {
    public enterTheHouse()   {
        return this.answerTheIntercom("Oi, quem é?");
    }

    protected answerTheIntercom(mensagem: string): string {
        return mensagem;
    }
}

const myHouse = new House("Branco", { rua: "Rua dos Bobos", numero: 0 });

console.log(myHouse.playIntercom());
console.log(myHouse.enterTheHouse());

// private
class Bank {
    private bankSafeAmount: number = 10000;

    private bankSafeDebit(amount: number): number | string    {
        if(amount <= this.bankSafeAmount) {
            this.bankSafeAmount -= amount;
            // return this.bankSafeAmount;
        }   else {
            return "O cofre não possui a quantidade de dinheiro necessária!";
        }

        return `Saque de ${amount} reais, realizado com sucesso!`;
    }

    protected cashOutBocaDoCaixa(amount: number)  {
        return this.bankSafeDebit(amount);
    }

    public cashOutCaixaEletronico(amount: number) {
        return this.bankSafeDebit(amount);
    }
}

const myBank = new Bank();
console.log(myBank.cashOutCaixaEletronico(100));

/*
    *   Protected x Private
*/
class Bank24Hour extends Bank {
    cashOut(amount: number) {
        return this.cashOutBocaDoCaixa(amount);
    }
}
const myBank24Hour = new Bank24Hour();

console.log(myBank24Hour.cashOut(100));

// Private (TypeScript) x Private (ECMAScript)
class Documents {
    private value: string = "12365444789-01"; // Atributo privado no TypeScript
    #number: number = 35; // Atributo privado no ECMAScript

    showDocuments() {
        return this.#number;
    }
}

class CNPJ extends Documents    {
    // Erro (não podemos sobreescrever, atributo privado no TS...) - private valor: string = "25698745632-01";
    #number: number = 50; // ... O que não ocolorre no ECMAScript (cada um tem seu escopo)

    showCNPJ() {
        return this.#number;
    }
}

const rg = new Documents();

console.log(rg.showDocuments());

const cnpj = new CNPJ();

console.log(cnpj.showCNPJ());

/*
    - Mesmo acusando erro (atributo privado):
        console.log("RG: " +  rg.valor);
    Ele vai ser compilador e vai nos dar a informação no arquiv .js;
    
    - No arquivo .js, o atributo private do arquivo .ts, é criado como público;

    - O erro só aparece no terminal, quando tentamos pegar o atributo
    privado, onde foi usado o hash ( # ). Isso, feito no TypeScript e depois
    convertido para JavaScript:
        console.log("RG: " +  rg.#numero);
*/

// Private * ReadOnly
/*
    - Com o readonly, ainda conseguimos ver a informação fora da classe (não podemos alterá-la) e
    com o private, não conseguimos ver a informação fora da classe e nem alterá-la;
    
    - Ainda, mesmo dentro da classse, só conseguiremos ver a informação, referente ao atributo readonly (sem
    poder alterá-la);
*/
class User  {
    readonly id: string = "123123abc234";
    name: string = "Joao";
    #password: string = "abc123";
    readonly dataCadastro: Date = new Date("2020-01-01");
}

const user = new User();
console.log(user.id);

// Erro (tentando modificar atributo que é somente para leitura) - user.id = "123";
// Mesmo assim, compilando e executando o arquivo .js, obteremos a informação
