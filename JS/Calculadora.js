let numero1 = parseFloat(prompt("Digite o número1:"));
let numero2 = parseFloat(prompt("Digite o número2:"));
let operador = prompt("Digite o operador(+, -, * ou /):");

try{
    if((numero1 || numero2) != Number) throw "O primeiro valor digitado não é um numérico"
    
}catch(e){
    console.log(e)
}

try{
    if((operador != "+" && operador != "-" && operador != "*" || operador != "/")) throw "Operador inválido"
    
}catch(e){
    console.log(e)
}


if(operador == "+"){
    console.log(numero1+numero2)
}else if(operador == "-"){
    console.log(numero1-numero2)
}else if(operador == "*"){
    console.log(numero1*numero2)
}else if(operador == "/"){
    if(numero2==0){
        console.log("O denominador é zero!")
    }else{
        console.log(numero1/numero2)
    }
}
