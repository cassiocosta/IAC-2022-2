
var ap1 = 1;
var ap2 =2;
var as = 4;

var result = ap1 + ap2 + as;

//if binário
if(result >= 7){
    mostrar("o aluno foi aprovado " + result)
}else{
    mostrar("reprovado");
}

//if ternário
var estaAprovado = (result>=7 ? true : false);

mostrar(estaAprovado);


// criando functions
function mostrar(qualquerCoisa){
    console.log(qualquerCoisa);
}

function somar(n1, n2){
    return n1 + n2;
}



//como fica uma função de conversao de qualquer base 
// para decimal?
function qualquerBaseParaDecimal(numero, paraBase){
    return 'vai converter o número ' + numero + ' da base ' + paraBase;
}


//laco com for
function testFor(){
    for (let i = 0; i < 10; i++) {
        mostrar('elemento ' + (i*2));
    }
}

function testArray(){
    const cars = [];
    cars[0]= "Saab";
    cars[1]= "Volvo";
    cars[2]= "BMW";

    //mostrar("array da posicao 1 " + cars[1]);

    for(i=0; i<cars.length;i++){
        mostrar("array da posicao " + i + " é " + cars[i]);
    }
}

//i=3;
//length=3

//no console"array da posicao 0 é saab
//no console: array da posicao 1 é volvo
//no console: array da posicao 2 é BMW



//i++ == i=i+1
//teste de mesa
// i=3
//console
// elemento 0
// elemento 2
// elemento 4
