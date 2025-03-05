// Utilizando o Promise.reject

function rand(min, max) {   // Função para criar um tempo aleatorio
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {               //Aqui vamos passar a mensagem e o tempo que vai demorar para executar a mensagem
    return new Promise((resolve, reject) => {  // Criando uma Promisse, por padrao, a Promise tem esses dois metodos, resolve e reject...  dentro desse construtor vai ter uma função
        if(typeof msg !== 'string') reject('BAD VALUE'); 
        setTimeout(() => {  
            console.log('Passei na Promisse.');                  // estamos usando setTimout para controlar o tempo que a nossa mensagem vai demorar para aparecer
            resolve(msg);                          // Executando o resolve, ou seja, chegando nesse ponto, significa que a promisse pode ser executada...
        }, tempo);  //Os setTimeout espera um parametro, que esta sendo passado neste caso o valor tempo
    });
        
}

function baixaPagina(){
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');         // Esta é a aplicação do Promise.reject
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:', e));

    // ERRO: Página em cache