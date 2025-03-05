// REDUCE
// Reduzir um array ha um elemento

// Some todos os numeros (REDUCE)
// Retorne um array com os pares (FILTER)
// Retorne um array com o dobro dos valores (MAP)


// Some todos os numeros (REDUCE)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 64 },
    {nome: 'Wallace', idade: 47 },
];


const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
//    console.log(acumulador, valor);
    return acumulador;
}, 0);  // Este é o valor que estamos colocando como padrao para acumulador... é opcional, se deixar em branco, o acumulador sera o primeiro valor da lista

/*
5 5
55 50
135 80
136 1
138 2
141 3
146 5
154 8
161 7
172 11
187 15
209 22
236 27
*/
// Maneira correta de utilizar o reduce
const total2 = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;
});
//console.log(total);



// Retorne um array com os pares (FILTER)
// Este foi apenas um exemplo para entender o Reduce, mas a maneira correta seria usar Filter
const Pares = numeros.reduce(function(acumulador, valor){
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
//console.log(Pares);




// Retorne um array com o dobro dos valores (MAP)
// Este foi apenas um exemplo para entender o Reduce, deveria se usar MAP
const maisVelha = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
//console.log(maisVelha);