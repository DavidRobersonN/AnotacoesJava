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


esperaAi('Frase 1', rand(1, 3)) // chamando a função esperaAi, e passando como parametro de tempo a minha função rand, que tras um tempo aleatorio
    .then(resposta => {         // Este dado que esta vindo dentro de resposta é justamente o dado que esta dentro de "resolve"   e dentro de then, vai uma função, no nosso caso uma arrow function que printa o dado que esta dentro de resolve
        console.log(resposta);
        return esperaAi('Frase 2', rand(1, 3));      // encadeando outra função em sequencia, usando o return 
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', rand(1, 3));
    })    
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {               // Este dado que esta dentro de e, é justamente o dado que colocamos dentro do reject, na hora de declarar a Promisse
        console.log('ERRO:', e);
    });