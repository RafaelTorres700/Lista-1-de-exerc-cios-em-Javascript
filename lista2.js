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
    const senhaCorreta = "senai123";
    let tentativas = 0;
    const maxTentativas = 3;

    while (tentativas < maxTentativas) {
        const senha = prompt("Por favor, digite a senha:");
        if (senha === senhaCorreta) {
            alert("Acesso permitido");
            break;
        } else {
            tentativas++;
            const tentativasRestantes = maxTentativas - tentativas;
            if (tentativasRestantes > 0) {
                alert(`Senha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s).`);
            }
        }
    }
}

if (tentativas === maxTentativas) {
    alert("Acesso bloqueado");
}

//Questão 4