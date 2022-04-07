function calcular() {
    let num1 = document.getElementById('number1')
    let num2 = document.getElementById('number2')
    let res = document.getElementById('resultado')
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let soma = n1 + n2
    let subtracao = n1 - n2
    let divisao = n1/n2
    let mult = n1*n2
    let poten = n1**n2
    
    res.innerHTML += (`<p>A soma entre: ${n1} e ${n2} é: ${soma}<\p>`)
    res.innerHTML += (`<p>A subtração entre: ${n1} e ${n2} é: ${subtracao}<\p>`)
    res.innerHTML += (`<p>A divisão entre: ${n1} e ${n2} é: ${divisao}<\p>`)
    res.innerHTML += (`<p>A multiplicação entre: ${n1} e ${n2} é: ${mult}<\p>`)
    res.innerHTML += (`<p>${n1} elevado a: ${n2} resulta em: ${poten}<\p>`)
  
    
}