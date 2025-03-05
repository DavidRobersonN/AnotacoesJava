function rand(min, max) {   // Função para criar um tempo aleatorio
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {               //Aqui vamos passar a mensagem e o tempo que vai demorar para executar a mensagem
    return new Promise((resolve, reject) => {  // Criando uma Promisse, por padrao, a Promise tem esses dois metodos, resolve e reject...  dentro desse construtor vai ter uma função
        if(typeof msg !== 'string') reject('BAD VALUE'); 
        setTimeout(() => {                    // estamos usando setTimout para controlar o tempo que a nossa mensagem vai demorar para aparecer
            resolve(msg);                          // Executando o resolve, ou seja, chegando nesse ponto, significa que a promisse pode ser executada...
        }, tempo);  //Os setTimeout espera um parametro, que esta sendo passado neste caso o valor tempo
    });
        
}

const promises = [
//    'Primeiro valor',             // se essa linha nao estiver comentada, vai ser sempre o primeiro a ser exibo, pois o race busca o primeiro a ser encontrado
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
//    'Outro valor'                 // se essa linha nao estiver comentada, vai ser sempre o primeiro a ser exibo, pois o race busca o primeiro a ser encontrado
    esperaAi('Promise 1', 3000),
];

Promise.race(promises)   //Promisse.race buscara o primeiro a ser encontrado
.then(function(valor){   // O then espera sempre uma função para tratar o valor do resolve
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});