// métodos ESTATICOS que vc pode usar dentro da classe, sem precisar estanciar, metodos que vc só pode usar dentroi da classe, e nao na estancia

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instancia
    aumentarVolume(){
        this.volume += 2;
    }

    //Método de instancia
    diminuiVolume() {
        this.volume -= 2;
    }

    //Método de classe..    esse metodo nao pode ser chamado pela instancia, é metodo que age dentro da classe....   o Método estatico nao tem acesso aos dados da estancia
    static somaValores(x, y){
        return x + y;
    }
}


const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
//console.log(controle1);

// Exemplo de utilizazção da função estatica
//console.log(ControleRemoto.somaValores(2,2));