// Atribuição via desestruturação


const pessoa = {
    nome: 'luiz',
    sobrenome: 'Miranda',
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const { endereco: {rua, numero } } = pessoa;


//trazendo o restante depois de nome e sobrenome ou seja o resto  "rest"
const { nome, sobrenome, ...resto } = pessoa;



//DECLARAÇÃO DE FUNÇÕES

//Esta função, escrita desta forma, com este mesmo modelo, chama-se 
// (Function hoisting) ela pode ser chamada em uma linha de codigo,
// antes de ser declarada
falaOi(); //Chamando a função, antes de ser declarada

function falaOi() { //Declarando a função
    console.log('oie');
}



// First-class objects (função são objetos de primeira classe)
const souUmDado = function() {
    console.log('Sou um dado');
}

souUmDado();


//Função que executa alguma função
function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado); //Executando a função souUmDado, atraves de outra função


//ARROW FUNCTION ....  vamos ver mais pra frente para que serve, VISTO EM ARRAYS
const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
}

funcaoArrow();


//Dentro de um objeto pode ter uma função
const obj = {
    falar () {
        console.log('Estou falando...');
    }
};

obj.falar();