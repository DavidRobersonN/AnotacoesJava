// Assim como nas funções construtoras, as classes precisam ter a primeira letra maiscula
class Pessoa {
    constructor(nome, sobrenome){           //o constructor é uma função da classe, que pode ou nao ser usada, ela é usasda quando se precisa ao instanciar uma classe, passar parametros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} Estou falando.`); //Para ultilizar o cifrao, precisdasr acento agudo, shift + acento
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');

console.log(p1.falar());
