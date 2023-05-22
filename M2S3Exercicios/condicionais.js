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

