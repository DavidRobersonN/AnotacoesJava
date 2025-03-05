// O foreach só esta disponivel dentro de arrays


const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let total = 0;

// Exemplo com o for of

for(let valor of a1){
//    console.log(valor);
}



a1.forEach(function(valor, indice, array){
//    console.log(valor);
});


/*
a1.forEach(valor => console.log(valor));  ///em arrow function, depois da seta "arrow" indicamos o que sera feito com o valor.. neste caso imprimir na tela
*/

// Utilizando o for it, poderiamos somar os valor, o que seria mais pratico com o reduce
a1.forEach(valor => {
    total += valor;
});
console.log(total);
