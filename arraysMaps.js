//MAP
//Diferente de Filter, o map sempre devolve uma array do mesmo tamanho do original

//Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);



//Muitas apis vao retornar json que sao objetos... exemplos com objetos


//Para cada elemento:
//Retorne apenas uma string com o nome da pessoas
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Letícia', idade: 19 },
    {nome: 'Rosana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];

//Retorne apenas uma string com o nome da pessoas
const nomes = pessoas.map(objeto => objeto.nome);
/*
[ 'Luiz', 'Maria', 'Eduardo', 'Letícia', 'Rosana', 'Wallace' ]
*/



//Remova apenas a chave "nome" do objeto
const idade = pessoas.map(objeto => ({ idade: objeto.idade }));  //esta retornando um objeto, apenas com os dados que estao em pessoas.idade...   E criando um novo objeto que se chamara idade
/*
[
  { idade: 62 },
  { idade: 23 },
  { idade: 55 },
  { idade: 19 },
  { idade: 32 },
  { idade: 47 }
]
*/


/*
//Adicione uma chave id em cada objeto //esta alterando o objeto original
const comId = pessoas.map(function(obj, indice) {  //ultilizando a function, o primeiro parametro que ela espera é o objeto, o segundo indice, o terceiro o array
    obj.id = indice; 
    return obj;
});
*/

/*
[
    { nome: 'Luiz', idade: 62, id: 0 },
    { nome: 'Maria', idade: 23, id: 1 },
    { nome: 'Eduardo', idade: 55, id: 2 },
    { nome: 'Letícia', idade: 19, id: 3 },
    { nome: 'Rosana', idade: 32, id: 4 },
    { nome: 'Wallace', idade: 47, id: 5 }
]
*/

//Agora criando um novo objeto com chave id
const comId2 = pessoas.map(function(objeto, indice){ //Recenbendo o objeto e o indice
    const newObj = { ...objeto };                    //Copiando o objeto
    newObj.id = indice;                              //Incluido o campo Id, e preenchendo com o indice
    return newObj;
});
console.log(comId2);
/*
  { nome: 'Luiz', idade: 62, id: 0 },
  { nome: 'Maria', idade: 23, id: 1 },
  { nome: 'Eduardo', idade: 55, id: 2 },
  { nome: 'Letícia', idade: 19, id: 3 },
  { nome: 'Rosana', idade: 32, id: 4 },
  { nome: 'Wallace', idade: 47, id: 5 }
]
*/

console.log(pessoas);
/* 
[
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]
*/