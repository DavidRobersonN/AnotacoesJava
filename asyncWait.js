function rand(min=0, max=3) {   // Função para criar um tempo aleatorio
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


// Async vai permitir que utilize a palavrra await dentro de uma função, para esperar uma promise ser executada
async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    } catch(e) {
        console.log(e);
    }
}

executa();


// A Promise tem 3 estados

// Pending -> Pendente
// fullfilled -=> Resolvida
// Reject -> Rejeitada