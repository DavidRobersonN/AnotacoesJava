//Filter

//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callBackFilter(valor) {
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callBackFilter);
//console.log(numerosFiltrados);


//Maneira mais pratica
const numerosFiltrados2 = numeros.filter(function(valor) {
    return valor > 10;
});



//utilizando Arrow Function
const numerosFiltrados3 = numeros.filter (valor => valor > 10);

//Arrorw Function retornando algo
const numerosFiltrados4 = numeros.filter((valor, indice, array) => {  //este Exemplo para mostrar que por padrao, se passado outros parametros, ele indentifica o indice e array....
//    console.log(valor, indice, array);
    return valor > 10;
});




//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com A

//Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];


//Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(function(lista) {
    return lista.nome.length >= 5;
});
//Agora utilizando Arrow Function
const pessoasComNomeGrande2 = pessoas.filter(lista => lista.nome.length >= 5);




//Retorne as pessoas com mais de 50 anos
const pessoasComMaisde50Anos = pessoas.filter(function(lista){
    return lista.idade > 50;
});
//Agora utilizando Arrow Function
const pessoasComMaisde50Anos2 = pessoas.filter(lista => lista.idade >=50);



//Retorne as pessoas cujo nome termina com A
const pessoasTerminaComA = pessoas.filter(function(lista){
    return lista.nome.toLowerCase().endsWith('a');
});


//Agora com Arrow Function
const pessoasTerminaComA2 = pessoas.filter(lista => lista.nome.toLowerCase().endsWith('a'));
console.log(pessoasTerminaComA2);