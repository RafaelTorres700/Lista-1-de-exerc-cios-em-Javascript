//Questão 1. Desenvolver um programa que pergunte o valor da conta a ser paga no restaurante e 
//exiba como resposta o valor com o acréscimo dos 10% da gorjeta do garçom

function gorjetaGarçom(){
let valorConta = parseFloat(prompt("Digite o valor total da conta"));
let gorjeta = (valorConta + (valorConta * 0.1));

alert(`O valor total da conta é: R$${valorConta} Com mais 10% do garçom (não obrigatório) é: R$${gorjeta}.`);
}

// Questão 2. Desenvolver um programa que faça duas perguntas: o valor referente às horas atuais e 
// o valor referente aos minutos atuais. Exemplo, se agora são 09:35h o usuário deverá 
// informar como resposta às horas atuais o valor 09 e como resposta aos minutos atuais 
// o valor 35. Em seguida o programa deverá apresentar como resposta quantos minutos 
// já se passaram desde às 00:00h deste dia.

function horasRelogio(){
    let horas = parseFloat(prompt("Digite as horas com dois digítos"));
    let minutos = parseFloat(prompt("Digite os minutos com dois digítos"));

    alert(`São ${horas}:${minutos}.`);

}

// Questão 3. Desenvolver um programa que pergunte ao usuário o seu peso (em quilos) e sua altura 
// (em metros). Ao final o programa deverá exibir na tela para o usuário o valor do peso 
// informado em gramas e a altura em centímetros.

function pesoAltura(){
    let peso = parseFloat(prompt("Digite seu peso em kg"));
    let altura = parseFloat(prompt("Digite sua altura em metros"));
    let pesoEmGramas = (peso * 1000);
    let alturaEmcentimetros = (altura * 100)

    alert(`Seu peso em gramas é: ${pesoEmGramas}g e sua alura em centimetros é:${alturaEmcentimetros}cm.`);
}

// Questão 4. Desenvolver um programa que pergunte ao usuário o seu peso e sua altura. Ao final o 
// programa deverá exibir na tela o valor do índice de massa corporal desta pessoa (IMC).
// • Fórmula: IMC = peso / altura2
// • Obs: peso em quilos e altura em metros

function imc(){
    let peso = parseFloat(prompt("Digite seu peso em kg"));
    let altura = parseFloat(prompt("Digite sua altura em metros"));
    let resultadoImc = peso / (altura * altura);
    

    alert(`Seu indice de imc é: ${resultadoImc.toFixed(2)}.`);
}

// Questão 5. Fazer um algoritmo que pergunte dois números e ao final apresente os seguintes 
// valores: a soma dos dois números, a subtração do primeiro pelo segundo número, a 
// subtração do segundo pelo primeiro número, a multiplicação entre os dois números, a 
// divisão do primeiro pelo segundo número, e também o resto da divisão do primeiro 
// pelo segundo número.

function multiplasContas() {
let num1 = parseFloat(prompt("Digite o primeiro numero para realizar suas operações"));
let num2 = parseFloat(prompt("Digite o segundo numero para realizar suas operações"));
let soma = (num1 + num2);
let subtração = (num1 - num2);
let subtraçãoInvertida = (num2 - num1);
let multiplicação = (num1 * num2);
let divisão = (num1 / num2);


document.writeln(`O resultado da soma desses numeros é: ${soma}.<br>`);
document.writeln(`O resultado da subtração desses numeros é: ${subtração}.<br>`);
document.writeln(`O resultado da subtração do segundo numero pelo primeiro é:${subtraçãoInvertida}.<br>`);
document.writeln(`O resultado da multiplcação desses numeros é: ${multiplicação}.<br>`);
document.writeln(`O resultado da divisão desses numeros é: ${divisão}.<br>`);
}

// Questão 6. Fazer um algoritmo que pergunte o nome de um vendedor, o seu salário fixo e o total 
// de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 
// 15% de comissão sobre suas vendas efetuadas, exibir ao final o seu nome, o salário 
// fixo, a comissão e o salário completo (fixo + comissão sobre vendas) no final do mês.

function comissão(){
    let nome = prompt("Digite o Seu nome:");
    let salarioFixo = parseFloat(prompt("Digite o valor do seu salario fixo"));
    let vendas = parseFloat(prompt("Digite quanto vendeu esse mês"));
    let comissao = (vendas * 0.15);
    let salariocomissao = salarioFixo + vendas + (vendas * 0.15);

    document.writeln(`nome: ${nome}<br>Salário fixo: ${salarioFixo}<br> Sua comissão este mês: ${comissao}<br>Salário final: ${salariocomissao}`);
}

// Questão 7. A Loja Mamão com Açúcar está vendendo seus produtos em até 10 prestações sem 
// juros. Faça um algoritmo que pergunte um valor de uma compra, o número de 
// prestações escolhidas e apresente como resultado o valor das prestações.

function mamaoComAcucar(){
    let valorProduto = parseFloat(prompt("Digite o valor do produto"));
    let valorParcela = (valorProduto / 10);

     document.writeln(`Sua compra parcelada ficou:<br> 10 x de: R$${valorParcela}.`);
    

}

// Questão 8. Fazer um algoritmo que receba o preço de custo de um produto e mostre como 
// resposta o valor de venda. Sabe-se que o preço de custo receberá um acréscimo de 
// acordo com um percentual informado pelo usuário.

function valorVenda(){
    let valorCompra = parseFloat(prompt("Digite o valor de custo do produto"));
    let valorPercentual = parseFloat(prompt("Digite o valor do percentual de 0 a 100 para acrecimo"));

    let percentual = (valorPercentual / 100);
    let valorFinal =  valorCompra + (valorCompra * percentual)

    document.writeln(`O valor da venda do produto será: R$${valorFinal}.`);
}

// Questão 9. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e 
// mostre-a expressa apenas em dias. Obs: Considere os anos com 365 dias e os meses 
// com 30 dias.

function quantidadeDeDias(){
        let idade = parseInt(prompt("digite sua idade"));
        let meses = parseInt(prompt("mes do seu nascimento"));
        let dias = parseInt(prompt("dia do seu nascimento"));

        let anosEmDias = (idade * 365);
        let mesesEmDias = (meses * 30);
        let totalDias = (anosEmDias + mesesEmDias + dias);
       
            document.writeln(`Você ja viveu: ${totalDias} dias nessa Terra.`);
}

// Questão 10. Escreva um algoritmo pergunte o número total de eleitores de um município, o 
// número de votos brancos, nulos e válidos e apresente como resposta o percentual que 
// cada um representa em relação ao total de eleitores.
