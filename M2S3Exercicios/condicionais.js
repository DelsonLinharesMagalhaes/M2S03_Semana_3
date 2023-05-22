// Exercicio 3 If e Else

let salario = 4500
let desconto = 0

if (salario < 2000){
    desconto = 0
}else if( salario < 3000){
    desconto = salario * 0.10
}else if (salario < 4000){
    desconto = salario * 0.15
}else{
    desconto = salario * 0.20
}
console. log("Desconto de "+desconto+" para o salário de "+salario+".")

// Exercicio 4 Switch case

let opcao = "2"
switch (opcao){
    case "1":
        console.log("Opção 1")
        break;
    case "2":
        console.log("Opção 2")
        break;
    case "3":
        console.log("Opção 3")
        break;
    case "4":
        console.log("Opção 4")
        break;
    default:
        console.log("Opção 5")

}

// Exercicio 5 For

for (let index = 1; index <=10; index++){
    console.log("Multiplos de 9: 9 x "+index+" = "+9*index)
}

// Exercicio 6 While

let quantidade =  20;
let contador = 0;

while (contador < quantidade){
    contador += 5;
    console.log("Adicionado uma unidade de 5kg, total acrescentado "+contador+"kg");
}

// Exercicio 7 Do While

const regioes = ['Norte', 'Nordeste', 'Centro-oeste','Sudeste','Sul'];
let index = 0;

do{
    console.log(regioes[index]);
    index ++
}while (index < regioes.length);


