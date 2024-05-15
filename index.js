function calculadora(numero1, numero2, operação) {
    let resultado
    let num1 = parseInt(numero1)
    let num2 = parseInt(numero2)
}

switch (operação) {
    case "+":
        resultado = num1 + num2
        break;
    case "-":
        resultado = num1 - num2
        break
    case "*":
        resultado = num1 * num2
        break
    case "/":
        resultado = num1 / num2
        break;
}