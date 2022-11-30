// passar de decimal para qulauqer base

//1-ex. numero 10... em binario é igual 1010
// 15 - 1111
// 7 - 111

// pega o 10 e divide pela base.
//ex
/// 10 / 2 = 5 quanto é o resto da div aqui?
// 5 / 2 = 2.5 -- transformar par ainteiro pois tenho que 2
// 2/2 = 1 
//1/2? nao... 

// 1 - pegar um número e divir por 2 (base)
// 2 - armazenar esse número para divir novamente.

function convertDecimalToBinary(numero, base){
    var dividendo = numero;
    var restoDivisao = 0;
    var result = "";
    
    var i = 0;
    while (i == 0 ){
        restoDivisao = dividendo%base;
        //console.log(`O resto da divisão de ${dividendo} é ${restoDivisao}`);
        dividendo = parseInt(dividendo / base) ;
        //console.log(`proximo dividendo ${dividendo}`);
        result +=restoDivisao;
        
        if(dividendo<base){
            i++;
            result+=dividendo;
            
        }
    }
    return inverter(result);


}


/**
numero=10; 
i=1;
dividendo = 5;
resto = 0;
result = 01
 */

function inverter(numero){
    var result = "";
    var arrNumero = numero.split("");
    for (i=arrNumero.length-1;  i>=0; i--) {
        result+=arrNumero[i];
            
    }
    return result;

}

/**
 
numero 0101
arrNum
0   1   2   3
0   1   0   1

1 0 1 0

i=3
3==0
result = 1010

 */
function inverter2(num){
    var arr = String(num).split('');
    var arr2 = [];
    for(var i = arr.length - 1; i >= 0; i--){
        arr2.push(arr[i]);
    }
    return Number(arr2.join(''));
}













