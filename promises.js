// 
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

/*
esperaAi('Frase 1', rand(1, 3));
esperaAi('Frase 2', rand(1, 3));
esperaAi('Frase 3', rand(1, 3));
*/

// Com isso, caso precisasemos que as frases fossem executadas em ordem, precisariamos de uma função que faça com que espere esse tempo, para executar na ordem
// Pode se usar call back, para resolver essa questao... por exemplo
/*
function rand(min, max) {   // Função para criar um tempo aleatorio
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo); 
}

//neste exemplo, utilizamos CALLBACK, nao é uma boa ppratica, pois se tornaria, facilmente, um aninhado de funções e condiçoes....
esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function() {
        esperaAi('Frase 3', rand(1, 3));
    });
});
*/


// PROMISSES, Ao trabalharmos com promisses, o nosso codigo trabalha de forma assincrona...
/*
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('coneção com o BD', rand(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Tratando os dados do BD', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe os dados na tela');
    }).catch();
    */


   //Exemplo com reject
    function esperaAi(msg, tempo) {
        return new Promise((resolve, reject) => {
            if(typeof msg !== 'string') reject(new Error('ERRO')); //rinado a excessao com o reject
            setTimeout(() => {
                resolve(msg);
            }, tempo);
        });
    }
    
    esperaAi('coneção com o BD', rand(1,3))
        .then(resposta => {
            console.log(resposta);
            return esperaAi('Buscando dados da Base', rand(1, 3));
        })
        .then(resposta => {
            console.log(resposta);
            return esperaAi('Tratando os dados do DB', rand(1, 3));
        })
        .then(resposta => {
            console.log(resposta);
        }).then(() => {
            console.log('Exibe os dados na tela');
        }).catch(e => {         //Quando over algum erro no reject, vai cari aqui no catch
            console.log('ERRO:', e)
        });

        