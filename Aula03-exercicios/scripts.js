

function calcular(oper,n1,n2){
    var result = 0;
    
    switch (oper) {
        case "+":
            result = n1+n2;
            break;
        case "-":
            result = n1-n2;
            break;
        case "*":
            result = n1*n2;
            break;
        case "/":
            result = n1/n2;
            break;
        default:
            return "somente as 4 operações arit.";
    }
    return result;
}

function tabuadaDo(numero){
    console.log(`Tabuada do ${ numero }\n---------------`);

    for (i = 0; i <= 10; i++) {
        console.log(`${ numero } x ${ i } = ${ numero * i };`)
    }
}

function imprimeFones(){
    var phones = '519595959595,51848848448,988498766,959595959';
    var arrPhones = phones.split(',');

    for(i=0;i<arrPhones.length;i++){
        console.log(`fone ${i+1}: ${arrPhones[i]}`)
    }
}

function convertToDecimal(numero){

    var arrNumero = numero.split("");
    
    var posicao = arrNumero.length -1;
    var resultDeCadaAlgarimo = 0;
    var resultFinal = 0;

    for(i=0;i<arrNumero.length;i++){
        console.log(`posicao ${i} = ${arrNumero[i]}`);
        console.log(`posicao ${posicao} = ${arrNumero[i]}`);
        //(a*b elevado a posiçao)
        resultDeCadaAlgarimo = (arrNumero[i] * (2**posicao));
        resultFinal = resultFinal + resultDeCadaAlgarimo;
        posicao--;
    }
    return resultFinal;
}



function convertToDecimal2(numero,base){

    var arrNumero = numero.split("");
    
    var posicao = arrNumero.length -1;
    var resultDeCadaAlgarimo = 0;
    var resultFinal = 0;
    var numeroNovo = 0;

    for(i=0;i<arrNumero.length;i++){
        //console.log(arrNumero[i] + "=" + returnDecimalByHexa(arrNumero[i]));
        //(a*b elevado a posiçao)

        // if(isNaN(arrNumero[i]))
        //     numeroNovo = returnDecimalByHexa(arrNumero[i])
        // else
        //     numeroNovo = arrNumero[i];

        //numeroNovo = (isNaN(arrNumero[i]) ? returnDecimalByHexa(arrNumero[i]) : arrNumero[i]);

        resultDeCadaAlgarimo = ((isNaN(arrNumero[i]) ? returnDecimalByHexa(arrNumero[i]) : arrNumero[i]) * (base**posicao));
        resultFinal = resultFinal + resultDeCadaAlgarimo;
        posicao--;
    }
    return resultFinal;
}

function returnDecimalByHexa(letra){
    switch (letra) {
        case "A":
            return 10;
        case "B":
            return 11;
    
        default:
            break;
    }
}

function conver

// 0
// 0<4
// posicao 0 = 1
// 1<4
//posicao 1 = 0
