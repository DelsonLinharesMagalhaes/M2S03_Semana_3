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


