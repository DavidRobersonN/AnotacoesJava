function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}


//Promise.all
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)   // tras todas as promisses depois que todas estiverem prontas
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});