alert(`Olá ${Usuario}, é um prazer ter você por aqui!`);

let saldo = 1000; // saldo inicial fictício
let senha = '3589'; // senha fictícia


function inicio() {
    let opcao = parseInt(prompt(`\nEscolha uma opção:
    1. Saldo
    2. Extrato
    3. Saque
    4. Depósito
    5. Transferência
    6. Sair`));

    
    switch (opcao) {
        case 1:
            saldoUsuario();
            break;
        case 2:
            extratoUsuario();
            break;
        case 3:
            sacar();
            break;
        case 4:
            depositar();
            break;
        case 5:
            transferir();
            break;
        case 6:
            console.log(`\n${Usuario}, foi um prazer, volte novamente!`); //isso gera uma mensagem de até logo
            return;
        default:
            erro();
            break;
    }

    inicio();
}

function saldoUsuario() {
    let senhaDigitada = prompt("Digite sua senha:");
    if (senhaDigitada === senha) {
        alert(`\nSeu saldo é : R$ ${saldo.toFixed(2)}.`);
    } else {
        alert("Senha incorreta. Tente novamente.");
        saldoUsuario();
    }
}

function extratoUsuario() {
  
    let extrato = ["Depósito de R$ 500.00", "Saque de R$ 200.00"];
    alert("\nExtrato:");
    extrato.forEach(transacao => {
        alert(transacao);
    });
}

function sacar() {
    let valor = parseFloat(prompt("Digite a ser sacado :"));
    if (valor <= 0) {
        alert("Valor inválido. Operação não autorizada.");
    } else if (valor > saldo) {
        alert("Saldo insuficiente. Operação não autorizada. ");
    } else {
        saldo -= valor;
        alert(`\nSaque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
}

function depositar() {
    let valor = parseFloat(prompt("Digite a ser depositado :"));
    if (valor <= 0) {
        alert("inválido. Operação não autorizada.");
    } else {
        saldo += valor;
        alert(`\nDepósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
    }
}

function transferir() {
    let conta = parseInt(prompt("Digite o número da conta para transferência:"));
    let valor = parseFloat(prompt("Digite o valor a transferir:"));
    if (valor <= 0) {
        alert(" Valor inválido. Operação não autorizada.");
    } else if (valor > saldo) {
        alert("Saldo insuficiente. Operação não autorizada. ");
    } else {
        saldo -= valor;
        alert(`\nTransferência de R$ ${valor.toFixed(2)} para a conta ${conta} realizada com sucesso.`);
    }
}
function erro() {
    alert("Tente novamente. Opção inválida.");
}
inicio();