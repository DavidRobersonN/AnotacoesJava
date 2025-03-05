// Retorne a soma do dobro de todos os pares

// Filtrar pares
// Dobrar os valores
// reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// Fazendo o aninhamento de Filter, Map e Reduce
const somaPar = numeros.filter(function(valor){
  return valor % 2 === 0;  //[ 50,   80, 2,  8, 22 ]          divindo o valor porr 2, mas retornando apenas se o resto da divisao for igual a 0
}).map(function(valor){
    return valor * 2;      //[ 100, 160, 4, 16, 44 ]
}).reduce(function(acumulador, valor){
    return acumulador += valor;
});

//console.log(somaPar); //324


// Refazendo o exemplo acima, mas agora em arrow Function
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador + valor);  // Temos dois parentes pois o reduce esta usando dois valores
console.log(numerosPares);




