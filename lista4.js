// Questão 1) Desenvolver um programa que pergunte um número. Se este número for maior que 20, 
// então ele deverá exibir a metade deste número, senão, ele deverá exibir o número sem 
// alterações.

function maiorQueVinte(){
    let numero = parseFloat(document.getElementById("m20").value);
    let metade = (numero / 2);

    if (numero > 20) {
document.getElementById("maiorquevinte").innerText = (`numero maior que 20 e sua metade é ${metade}`);
    }else{
        document.getElementById("maiorquevinte").innerText =( `numero digitado ${numero} é menor que 20`);
    }

}

// Questão 2) Desenvolver um programa que permita ao aluno responder qual a capital do Brasil. O 
// programa deverá exibir se a resposta está certa ou errada.

 function capitalBrasil() {
    const capitalBR = document.getElementById("capital").value.trim().toLowerCase();
    
    if (capitalBR === "brasília") {
        
        document.getElementById("capitaldobrasil").innerText = "Acertou";
    } else {
        document.getElementById("capitaldobrasil").innerText = "Errou";
    }
}

// Questão 3) Desenvolver um programa que pergunte um número, e apresente como resposta se o 
// referido número é par ou é ímpar.


function parimpar() {
    // Solicita ao usuário que digite um número e converte para inteiro
    let numero = parseFloat(document.getElementById("parimpar").value);
     

    if (numero % 2 ===0 ) { 
        
        document.getElementById("quatrooucinco").innerText = "Este numero é par";
    }     
    else {
        document.getElementById("quatrooucinco").innerText = "Este numero é impar";

        
    }

    
}


// Questão 4) Desenvolver um programa que pergunte um valor numérico inteiro e faça a exibição desse 
// valor caso seja divisível por 4 e 5. Não sendo divisível por 4 e 5, o programa deverá exibir a 
// mensagem “Valor não é divisível por 4 e 5”.

function calculaQuatroCinco() {
    let numero = parseFloat(document.getElementById("entradaNumero").value);
    let resultado = "";

    if (isNaN(numero)) {
        resultado = "Por favor, digite um número válido.";
    } else {
        if (numero % 4 === 0 && numero % 5 === 0) {
            resultado = numero + " é divisível por 4 e por 5.";
        } else if (numero % 4 === 0) {
            resultado = numero + " é divisível por 4.";
        } else if (numero % 5 === 0) {
            resultado = numero + " é divisível por 5.";
        } else {
            resultado = numero + " não é divisível por 4 nem por 5.";
        }
    }

    document.getElementById("resultado").innerText = resultado;
}


function calcularMedia() {
    // Captura os valores das notas e converte para número
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let n4 = parseFloat(document.getElementById("nota4").value);

    // Verifica se todas as notas foram preenchidas corretamente
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todas as notas corretamente.";
        return;
    }

    // Calcula a média
    let media = (n1 + n2 + n3 + n4) / 4;
    let mensagem = "";

    // Verifica se o aluno foi aprovado ou reprovado
    if (media >= 5) {
        mensagem = `Aluno APROVADO com média ${media.toFixed(2)}.`;
    } else {
        mensagem = `Aluno REPROVADO com média ${media.toFixed(2)}.`;
    }

    // Exibe o resultado
    document.getElementById("resultado").innerText = mensagem;
}

function calcularDiferenca() {
    // Pegando os valores do input
    let v1 = parseInt(document.getElementById("valor1").value);
    let v2 = parseInt(document.getElementById("valor2").value);
    let diferenca = Math.abs(v2 - v1);

    
   
    // Exibindo o resultado na página
 document.getElementById("resultados").innerText = (`A diferença entre os numeros é: ${diferenca}`)
}

// Questão 7) Desenvolver um programa que pergunte um valor inteiro positivo ou negativo, e exiba como 
// resposta o módulo deste valor, ou seja, o número lido como sendo positivo

function numeropositivo() {
    let numero = parseInt(document.getElementById("valor").value);
    let positivo = Math.abs(numero);
    
   alert("o numero positivo é:" + (positivo));
       
    }

//    Questã 8) Desenvolver um programa que pergunte um número inteiro qualquer e verifique se ele está 
// na faixa de 1 a 10.
function deumadez(){
    let numero = parseInt(document.getElementById("umadez").value);

    if (numero >=1 && numero <= 10){
        
         document.getElementById("Resultado").innerText = "Este numero esta entre 1 e 10";
    
    
        } else {
            document.getElementById("Resultado").innerText = "Este numero não esta entre 1 e 10";

        }

}

// Questão 9) Desenvolver um programa que pergunte um número e exiba a informação de que ele é 
// positivo, negativo ou nulo.

function verificarNumero() {
    let numero = parseInt(document.getElementById("valor").value);

    if (numero > 0) {
        alert(`O número ${numero} é POSITIVO.`);
    } else if (numero < 0) {
        alert(`O número ${numero} é NEGATIVO.`);
    } else {
        alert("O número é NULO (zero).");
    }
}

// (Questão10) Desenvolver um programa que pergunte dois números inteiros, e apresente como 
// resultado se o segundo número informado é ou não um divisor do primeiro número 
// informado.

function verificarDivisor() {
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, digite dois números inteiros válidos.");
        return;
    }

    if (n2 === 0) {
        alert("Não é possível dividir por zero.");
    } else if (n1 % n2 === 0) {
        alert(`Sim! ${n2} é um divisor de ${n1}.`);
    } else {
        alert(`Não! ${n2} não é um divisor de ${n1}.`);
    }
}



// questão 11) Desenvolver um programa que pergunte um número de 3 casas e apresente como 
// resultado somente o algarismo das centenas.

function mostrarCentena() {
    let numero = parseInt(document.getElementById("numero").value);

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    // Garante que o número está entre 100 e 999 (ou -999 e -100)
    if ((numero >= 100 && numero <= 999) || (numero <= -100 && numero >= -999)) {
        let centena = Math.floor(Math.abs(numero) / 100); // Extrai a centena
        alert(`O algarismo das centenas é: ${centena}`);
    } else {
        alert("Por favor, digite um número de exatamente 3 dígitos.");
    }
}

// Questão 12) Desenvolver um programa que pergunte 5 números inteiros e identifique o maior número e 
// o menor número.

function verificarMaiorMenor() {
    // Captura e converte os valores para inteiros
    let numeros = [
        parseInt(document.getElementById("n1").value),
        parseInt(document.getElementById("n2").value),
        parseInt(document.getElementById("n3").value),
        parseInt(document.getElementById("n4").value),
        parseInt(document.getElementById("n5").value)
    ];

    // Verifica se todos os valores são válidos
    if (numeros.some(isNaN)) {
        alert("Por favor, preencha todos os campos com números inteiros válidos.");
        return;
    }

    // Calcula o maior e o menor
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    alert(`O maior número é: ${maior}\nO menor número é: ${menor}`);
}

function ordenarValores() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y); // Ordena em ordem crescente

    alert(`Valores em ordem crescente: ${numeros.join(", ")}`);
}