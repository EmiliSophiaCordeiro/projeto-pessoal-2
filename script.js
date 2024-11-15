// gerenciador de bitcoin

//variáveis
let saldo = 0
let saldoBitcoin = 0
let valorBitcoin = 0

//função de comprar bitcoin
function comprarBitcoin() {
    let quantidade = prompt("Quantos bitcoins você deseja comprar?")
    quantidade = Number(quantidade)
    if (quantidade > 0) {
        saldoBitcoin += quantidade
        alert(`Você comprou ${quantidade} bitcoins. Seu saldo atual é de ${saldoBitcoin} bitcoins.`)
    } else {
        alert("Você não pode comprar bitcoins negativos.")
    }
    }

//função de vender bitcoin
function venderBitcoin() {
    let quantidade = prompt("Quantos bitcoins você deseja vender?")
    quantidade = Number(quantidade)
    if (quantidade > 0) {
        if (quantidade <= saldoBitcoin) {
            saldoBitcoin -= quantidade
            alert(`Você vendeu ${quantidade} bitcoins. Seu saldo atual é de ${saldoBitcoin} bitcoins.`)
        } else {
            alert("Você não possui essa quantidade de bitcoins para vender.")
        }
    }}

    //loop
 while (true) {
    //menu
switch (prompt("O que você deseja fazer? \n1 - Comprar bitcoins \n2 - Vender bitcoins \n3 - Ver saldo \n4 - Sair")) {
    case "1": //comprar
        comprarBitcoin()
        break
    case "2": //vender
        venderBitcoin()
        break
    case "3": //ver saldo
        alert(`Seu saldo atual é de ${saldoBitcoin} bitcoins.`)
        break
    case "4": //sair
        alert("Obrigado por usar o gerenciador de bitcoins!")
        break
    default:
}}




