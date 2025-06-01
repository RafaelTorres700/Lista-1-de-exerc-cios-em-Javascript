// Questão 1) Elaborar um programa de computador que pergunte ao usuário o valor do Raio de um
// círculo e calcule a área do referido círculo, apresentando o resultado deste cálculo.
// Obs: A fórmula da área é a = πr². Considere o valor de π = 3. 14159265.

function calcularArea() {
  const pi = 3.14159265;
  // Pega o valor do input do HTML
  const raio = parseFloat(document.getElementById("raio").value);
  // Verifica se o valor do raio é válido
//   if (isNaN(raio) || raio <= 0) {
//     document.getElementById("resultado").innerText = "Por favor, digite um raio válido.";
//     return;
//   }
  // Calcula a área do círculo
  const area = pi * (raio ** 2);
  // Exibe o resultado no parágrafo
  document.getElementById("resultado").innerText = "A área do círculo é: " + area.toFixed(2);
}



// Questão 2) Desenvolver um programa que calcule o salário líquido de um professor. Para elaborar o
// programa, é necessário possuir alguns dados, tais como: Valor da hora aula, número de horas
// trabalhadas no mês e percentual de desconto do INSS.

function calcularSalario() {
  const horaAula = parseFloat(document.getElementById("horaAul").value);
  const horaTrabalhada = parseFloat(document.getElementById("horaTrab").value);
  

  // Verifica se os valores são válidos
  if (isNaN(horaAula) || isNaN(horaTrabalhada) || horaAula <= 0 || horaTrabalhada <= 0) {
    document.getElementById("resultadosalario").innerText = "Por favor, preencha os dois campos corretamente.";
    return;
  }

  // Calcula o salário
  const totalSalario = horaAula * horaTrabalhada;
  const descontoinss = totalSalario - (totalSalario * 0.15);


  // Exibe o resultado
  document.getElementById("resultadosalario").innerText = `O salário do professor com desconto do INSS é: R$ ${descontoinss.toFixed(2)}`;
}

// Questão 3) Fazer um programa que pergunte dois valores reais e apresente o primeiro com acréscimo
// de 30% e o segundo com desconto de 25%.



function calcularacrescimoEDesconto(){
    const acrescimo = parseFloat(document.getElementById("acrescentar").value);
    const desconto = parseFloat(document.getElementById("descontar").value);

    const valorComAcrescimo = acrescimo + (acrescimo * 0.3);
    const valorComDesconto = desconto - (desconto * 0.25) ;

    document.getElementById("resultado do acrescimo").innerText = `Os valore com acréciomo de 30% é: R$ ${valorComAcrescimo.toFixed(2)}`;
    document.getElementById("resultado do desconto").innerText = `Os valor com desconto de 25% é: R$ ${valorComDesconto.toFixed(2)}`;

}

// Questão 4) Fazer um algoritmo que pergunte 4 números e apresente a média aritmética ponderada,
// com pesos respectivos de 1, 2, 3 e 4.
// Obs: Sabe-se que o cálculo da média aritmética ponderada (mp) é feito da seguinte forma:
// mp = ( (num1 x peso1) + (num2 x peso2) + (num3 x peso3) + (num4 x peso4) ) / (peso1 +
// peso2 + peso3 + peso4)

function mediaAritmetica(){
    let num1 =parseFloat(document.getElementById("num1").value);
    let num2 =parseFloat(document.getElementById("num2").value);
    let num3 =parseFloat(document.getElementById("num3").value);
    let num4 =parseFloat(document.getElementById("num4").value);
    const peso1 = 1;
    const peso2 = 2;
    const peso3 = 3;
    const peso4 = 4;

    const mp = ( (num1 * peso1) + (num2 * peso2) + (num3 * peso3) + (num4 * peso4) ) / (peso1 + peso2 + peso3 + peso4);

    document.getElementById("mediaaritimetica").innerText = `O valor da Média Aritimética dos numeros digitados é: ${mp}`;

}

function calculaVolume(){
    const pi = 3.14159265
    let raio = parseFloat(document.getElementById("Raio").value);
    let altura = parseFloat(document.getElementById("Altura").value);
    
 let Volume = (pi * raio * 2 * altura);


    document.getElementById("calculadordeVolume").innerText = `O volume da late de óleo é: ${Volume.toFixed(2)}cm²`;

}

// Questão 6) Fazer um algoritmo que pergunte dois valores a e b, efetue a troca dos valores, de forma que
// a variável "a" passe a possuir o valor da variável "b", e que a variável "b" passe a possuir o
// valor da variável "a", e apresente os valores trocados.

function trocaValor(){
    let valora = parseFloat(document.getElementById("a").value);
    let valorb = parseFloat(document.getElementById("b").value);

    
document.getElementById("trocaporb").innerText = `O valor A é: ${valorb} e o valor B é: ${valora}`;

}

// Questão 7) Fazer um algoritmo que pergunte os valores dos catetos de um triângulo retângulo e
// apresente o valor da hipotenusa.
// Obs: A fórmula é hipotenusa² = cateto1² + cateto2² ou, se preferir, hipotenusa = √( cateto1² +
// cateto2²).

function valorhipotenusa(){
    let cateto1 = parseFloat(document.getElementById("cateto1").value);
    let cateto2 = parseFloat(document.getElementById("cateto2").value);
    let hipotunusa = (cateto1 * cateto1) + (cateto2 * cateto2);
    let hipotenusaFinal = Math.sqrt(hipotunusa);


  document.getElementById("resultado hipotenusa").innerText = `O valor da hipotunisa é: ${hipotenusaFinal.toFixed(2)}`;  
}

// Questão 8) Fazer um algoritmo que pergunte a base e a altura de um retângulo, 
// e apresente:
// a) O perímetro deste retângulo
// b) A área deste retângulo
// c) A diagonal deste retângulo
// Eis as fórmulas:
// perímetro = Soma de todos os lados do retângulo.
// área = Base x Altura
// diagonal² = base² + altura² ou, se preferir, diagonal = √(base² + altura²).

function retangulo(){
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let hipotenusa = (base * base) + (altura * altura);
    let hipotenusaFinal = Math.sqrt(hipotenusa);
    let perimetro = (base * 2) + (altura * 2);
    let area = (base * altura);

    document.getElementById("resultadoretangulo").innerText = `O valor do perimetro em cm é: ${perimetro}cm`;  
    document.getElementById("resultadoretangulo2").innerText = `O valor da area em cm é: ${area}cm`;  
    document.getElementById("resultadoretangulo3").innerText = `O valor da diagonal em cm é: ${hipotenusaFinal.toFixed(2)}cm`;  

}

function calcularDecimoTermo() {
  const a1 = parseFloat(document.getElementById("primeiroTermo").value);
  const r = parseFloat(document.getElementById("razao").value);

  if (isNaN(a1) || isNaN(r)) {
    document.getElementById("resultadoPA").innerText = "Preencha os dois campos corretamente.";
    return;
  }

  const a10 = a1 + (10 - 1) * r;

  document.getElementById("resultadoPA").innerText = `O 10º termo da PA é: ${a10}`;
}


function calcularQuintoTermoPG() {
  const a1 = parseFloat(document.getElementById("pgPrimeiroTermo").value);
  const r = parseFloat(document.getElementById("pgRazao").value);

  if (isNaN(a1) || isNaN(r)) {
    document.getElementById("resultadoPG").innerText = "Preencha corretamente o 1º termo e a razão.";
    return;
  }

  const a5 = a1 * Math.pow(r, 4); // 5º termo -> expoente é 4

  document.getElementById("resultadoPG").innerText = `O 5º termo da PG é: ${a5}`;
}

