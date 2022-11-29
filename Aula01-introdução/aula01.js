var i =0;
var dobro=0;
var saida = "imprime o resultado";
var existe = true;
var test;

console.log(typeof(dobro));
console.log(typeof(saida));
console.log(typeof(existe));
console.log(typeof(nada));
//teste de mesa
//i=4
//dobro = 6

//o dobro de 2 é 4;
while(i<5){
    dobro = i * 2;
    console.log("o dobro de " + i + " é " + dobro);
    i++;
    // o dobro de 2 é 4;
}

var idade = 29;

if(idade>18){
    console.log("pode tirar a cnh");
}else if(idade>18 && idade<30){
    console.log("pode tirar de avião");
}else{
    console.log("calma ae.");
}

