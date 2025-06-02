// Questão 1) Desenvolver um programa que exiba os números de 1 a 100.

function deUmACem() {
    for (let i = 1; i <= 100; i++) {
        document.writeln(i);
    }
    document.getElementById("resultado").innerText
}

// Questão 2) Desenvolver um programa que exiba os 
// números em ordem decrescente de 100 até 1
function deCemAUm() {
    for (let i = 100; i >= 1; i--) {
        document.writeln(i);
    }
    document.getElementById("resultado").innerText
}

// Questão 3 Desenvolver um programa que apresente os quadrados 
// dos números inteiros de 15 a 200.

function quadradoDeNumeros() {
    for (let i = 15; i <= 200; i++) {
        document.writeln(i * i);
    }
    document.getElementById("resultado").innerText 
}

