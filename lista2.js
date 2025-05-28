//Questão 1

function idade() {

    let idades = parseInt(prompt("Digite sua idade"));

    if (idades < 12) {
        alert("você é criança");

    } else if (idades >= 13 && idades <= 17) {
        alert("Você é um adolecente")
    }

    else if (idades >= 18 && idades <= 59) {
        alert("Você é um adulto")
    }
    else {
        alert("Você é idoso");
    }
}

// Questão 2

function estoque(){
let entrada = parseInt(prompt("Digite quantidade de produtos que entraram no estoque"));
let saida = parseInt(prompt("Digite quantidade de produtos que sairam do estoque"));
let estoq = 100;
let total = ((estoq + entrada) - saida);

alert(total);

}

//Questão 3
function validasenha() {
    // Define a senha correta que o usuário deve digitar para ter acesso
    const senhaCorreta = "senai123";

    // Inicia o contador de tentativas em 0
    let tentativas = 0;

    // Define o número máximo de tentativas permitidas
    const maxTentativas = 3;

    // Enquanto o número de tentativas for menor que o máximo permitido
    while (tentativas < maxTentativas) {

        // Solicita ao usuário que digite a senha
        const senha = prompt("Por favor, digite a senha:");

        // Verifica se a senha digitada é igual à senha correta
        if (senha === senhaCorreta) {
            // Se a senha estiver correta, exibe mensagem de acesso permitido
            alert("Acesso permitido");

            // Sai do laço imediatamente (não precisa mais pedir senha)
            break;
        } else {
            // Se a senha estiver errada, incrementa o número de tentativas
            tentativas++;

            // Calcula quantas tentativas ainda restam
            const tentativasRestantes = maxTentativas - tentativas;

            // Se ainda houver tentativas disponíveis, exibe mensagem informando isso
            if (tentativasRestantes > 0) {
                alert(`Senha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s).`);
            }
        }
    }

    // Após sair do laço, verifica se o número de tentativas atingiu o limite
    if (tentativas === maxTentativas) {
        // Se sim, o acesso é bloqueado
        alert("Acesso bloqueado");
    }
}


//Questão 4
function verificarPrimo() {
    // Solicita ao usuário que digite um número e converte para inteiro
    let numero = parseInt(prompt("Digite um número: "))
    let primo = true // Assume inicialmente que o número é primo
    // Verifica se o número é menor que 2 (não pode ser primo)
    if (numero < 2) { primo = false  }     
    else {

        // Verifica divisores de 2 até a raiz quadrada do número
        for (let i = 2; i <= Math.sqrt(numero); i++) 

            // Se encontrar algum divisor exato, não é primo
           { if (numero % i === 0) {primo = false 
            break } } // Interrompe o laço, pois já sabemos que não é primo
            
        
    }

    // Exibe o resultado ao usuário
    if (primo) {
        alert(numero + " é um número primo.")
    } else {
        alert(numero + " não é um número primo.")
    }
}

//Questão 5
function fila(){
    let filas = ["Carlos","Maria","João"];    
    filas.push("Angela");
    alert(`A fila atual é: ${filas}`);
}

// Questão 6 (avaliando com if um por um )
// function notas(){
//     let avaliacao = parseInt(prompt("Digite sua nota para nossa avaliação"))
    

//    if (isNaN(avaliacao) || avaliacao < 0 || avaliacao > 10) {
//         alert("Nota inválida. Digite um número de 0 a 10.");
//         return;
//    }

//         switch (true) {
//         case (avaliacao >= 0 && avaliacao<= 4):
//             alert("avaliacao: Ruim ");
//             break;
//         case (avaliacao >= 5 && avaliacao<= 7):
//             alert("avaliacao: Regular");
//             break;
//         case (avaliacao >= 8 && avaliacao<= 10):
//             alert("avaliacao: Ótima");
//             break;


    
//     } 
// }  

//     // Questão 6
// function notas() {
//     // Cria um array vazio para armazenar as 10 notas
//     let avaliacoes = [];

//     // Laço para coletar 10 notas do usuário
//     for (let i = 0; i <= 10; i++) {
//         let nota = parseInt(prompt(`Digite a nota ${i + 1} (de 0 a 10):`));

//         // Validação básica
//         if (isNaN(nota) || nota < 0 || nota > 10) {
//             alert("Nota inválida. Digite um número entre 0 e 10.");
//             i--; // Refaz essa iteração
//             continue;
//         }

//         // Adiciona a nota ao array1
//         avaliacoes.push(nota);
//     }

//     // Laço para avaliar cada nota com switch
//     for (let i = 0; i < avaliacoes.length; i++) {
//         let avaliacao = avaliacoes[i];

//         switch (true) {
//             case (avaliacao >= 0 && avaliacao <= 4):
//                 alert(`Nota ${avaliacao}: Ruim`);
//                 break;
//             case (avaliacao >= 5 && avaliacao <= 7):
//                 alert(`Nota ${avaliacao}: Regular`);
//                 break;
//             case (avaliacao >= 8 && avaliacao <= 10):
//                 alert(`Nota ${avaliacao}: Ótima`);
//                 break;
//             default:
//                 alert(`Nota ${avaliacao}: Inválida`);
//                 break;
//         }
//     }
// }

//Questão 7
function mediaNotas(){

    let totalalunos = [];

    // Laço para coletar 10 notas do usuário
    for (let i = 0; i < 5; i++) {
        let aluno = prompt(`Digite o alunot de recuperação ${i + 1}:`);


        for (let i = 0; i < 3; i++) {
        let notas = parseInt(prompt(`Digite as notas dos alunos recuperação ${i + 1}:`));

        // Adiciona a nota ao array1
        totalalunos.push(aluno);
        totalalunos.push(notas);
    }
    
}
alert(`os alunos e suas notas:" ${totalalunos}`);
}

//----------------------------------------------------------------------


    
        

//         // Adiciona a nota ao array1
//       //  totalalunos.push(notas);
// }

// alert(`${totalalunos}`);



// }