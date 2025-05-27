//Questão 1

function identificacao() {
    let nome = prompt("Digite seu nome completo:");
    let idade = parseInt(prompt("Digite sua idade:"));

    alert("Nome Completo : " + nome + " e " + idade + " anos de idade");

}


// Questão 2 / a
function valoresa() {
    let num1 = parseInt(prompt("Digite o primeiro número da soma:"));
    let num2 = parseInt(prompt("Digite o segundo número da soma:"));
    let num3 = parseInt(prompt("Digite o terceiro número da soma:"));
    let num4 = parseInt(prompt("Digite o quarto número da soma:"));
    let Soma = 0;
    soma = (num1 + num2 + num3 + num4);
    alert(soma);
}



// Questão 2 / b
function valoresb() {
    let num1 = parseInt(prompt("Digite o primeiro número da multiplicação:"));
    let num2 = parseInt(prompt("Digite o segundo número da multiplicação:"));
    let num3 = parseInt(prompt("Digite o terceiro número da multiplicação:"));
    let num4 = parseInt(prompt("Digite o quarto número da multiplicação:"));
    let multiplicacao = 0;
    multiplicacao = (num1 * num2 * num3 * num4);
    alert(multiplicacao);
}



// Questão 2 / c
function valoresc() {
    let num1 = parseInt(prompt("Digite o valor em Dolar:"));
    let conversao = parseFloat(num1 * 5.70);
    alert(`R$ ${conversao} é o valor convertido para reais`)
}

// Questão 3 
function anteriorposterior() {
let num1 = parseInt(prompt("Digite um numero e conheça seus pares:"));
let antes = (num1 -1)
let depois = (num1 + 1)
alert (antes)
alert (depois)
}

// Questão 4
function acrecimosalario() {
let salario = parseFloat(prompt("Digite seu salário atual:"));
let salariototal =((salario * 0.15) + salario);

alert(`Seu salário com o aumento de 15% passa a ser: ${salariototal.toFixed(2)}`);

}

//Questão 5
function convtemperatura() {
let fahrenheit = parseFloat(prompt("Digite a temperatura atual em fahrenheit:"));
let celcius = ((fahrenheit -32) * 5/9);

alert(`A temperatura atual em celcius é: ${celcius.toFixed(2)}°C`);

}

//Questão 6
function media(){
let num1 = parseFloat(prompt("Digite o primeiro numero para calcular a media"));
let num2 = parseFloat(prompt("Digite o segundo numero para calcular a media"));
let num3 = parseFloat(prompt("Digite o terceiro numero para calcular a media"));

let medias = ((num1+num2+num3)/3);

alert (`A Média entre os tres numeros é: ${medias.toFixed(2)}`);
}

//Questão 7
function kmporlitro(){
let distancia = parseFloat(prompt("Digite a Distancia total"));
let combustivel = parseFloat(prompt("Digite a quantidade de litros abastecido"));
let kmporlitros = (distancia / combustivel);

alert(`Uma viagem de ${distancia}km o meu veiculo teve o consumo média de ${kmporlitros}km/l `);
}

//Questão 8
function numvariados() {
let num1 = parseFloat(prompt("Digite um numero e veja suas variações"));
let quadrado = (num1*num1);
let raiz = Math.sqrt(num1);


alert(`Você digitou o numero ${num1}.`);
alert(`Seu valor ao quadrada é: ${quadrado}.`);
alert (`Sua raiz quadrada é: ${raiz}.`);

}


//Questão 9
function atraso() {
let valor = parseFloat(prompt("Digite o valor do débito"));
let taxa = 2;
let dias = parseFloat(prompt("Digite a quantidade de dias em atraso"));

let prestação = (valor + (valor * (taxa / 100)* dias));

alert(`Seu Débito esta no valor de ${prestação} pague logo `);
}