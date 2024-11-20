// gerenciador de bitcoin

//variáveis
let saldo = 0
let saldoBitcoin = 0
let valorBitcoinReais = 523.811
//função de comprar bitcoin
function comprarBitcoin() {
    // Solicita ao usuário a quantidade de Bitcoins a comprar
    let quantidade = prompt("Quantos bitcoins você deseja comprar?")
    quantidade = Number(quantidade)// Converte a entrada para número
    if (quantidade > 0) {// Verifica se a quantidade é positiva
        saldoBitcoin += quantidade// Adiciona a quantidade ao saldo de Bitcoins
        alert(`Você comprou ${quantidade} bitcoins. Seu saldo atual é de ${saldoBitcoin} bitcoins. O valor em reais foi de R$${quantidade * valorBitcoinReais },00.`)
    } else {
        alert("Você não pode comprar bitcoins negativos.")// Alerta para entrada inválida 
    }
    }

//função de vender bitcoin
function venderBitcoin() {
    // Solicita ao usuário a quantidade de Bitcoins a vender
    let quantidade = prompt("Quantos bitcoins você deseja vender?")
    quantidade = Number(quantidade)// Converte a entrada para número
    if (quantidade > 0) {// Verifica se a quantidade é positiva
        if (quantidade <= saldoBitcoin) {// Verifica se o usuário tem Bitcoins suficientes para vender
            saldoBitcoin -= quantidade// Subtrai a quantidade do saldo de Bitcoins
            alert(`Você vendeu ${quantidade} bitcoins. Seu saldo atual é de ${saldoBitcoin} bitcoins. O valor em reais foi de R$${quantidade * valorBitcoinReais },00.`)
        } else {
            alert("Você não possui essa quantidade de bitcoins para vender.")// Alerta para saldo insuficiente
        }
    }}

    //loop
 while (true) {
    //menu
switch (prompt("O que você deseja fazer? \n1 - Comprar bitcoins \n2 - Vender bitcoins \n3 - Ver saldo \n4 - Como funciona o Bitcoin \n5 - Quanto custa o Bitcoin \n6 - Sair")) {
    case "1": //comprar
        comprarBitcoin()
        break
    case "2": //vender
        venderBitcoin()
        break
    case "3": //ver saldo
        alert(`Seu saldo atual é de ${saldoBitcoin} bitcoins. O valor em reais foi de R$${saldoBitcoin * valorBitcoinReais },00.`)
        break
    case "4": //como funciona o bitcoin
    alert(" Bitcoin é uma criptomoeda digital que funciona como uma moeda de troca virtual. \nO bitcoin foi criado em 2009 por Satoshi Nakamoto, um programador americano. \nVocê pode comprar bitcoins usando seu saldo em reais, e vender bitcoins usando seu saldo em bitcoins. \nAqui estão algumas das principais características do Bitcoin:	 \nTransações: As pessoas podem enviar e receber Bitcoins entre si. Essas transações são agrupadas em blocos. \nBlockchain: A blockchain é um livro-razão público e descentralizado onde todas as transações de Bitcoin são registradas. Cada bloco contém um conjunto de transações e é ligado ao bloco anterior, formando uma cadeia. \nMineração: Os mineradores são indivíduos ou organizações que utilizam computadores poderosos para resolver complexos problemas matemáticos. Esse processo de mineração confirma e verifica as transações de Bitcoin, adicionando novos blocos à blockchain. Em troca, os mineradores são recompensados com novos Bitcoins. \nDescentralização: Não há uma autoridade central controlando o Bitcoin. A rede é mantida por uma vasta rede de computadores ao redor do mundo, tornando-a resistente à censura e ao controle centralizado. \nCarteira Digital: Para armazenar e utilizar Bitcoins, você precisa de uma carteira digital, que pode ser um software em seu computador ou smartphone. \n")
        break
        case "5"://quanto custa o bitcoin
        alert("Atualmente, o valor de 1 Bitcoin (BTC) \né aproximadamente R$ 523,811,00. \nVale lembrar que o preço do Bitcoin pode \nvariar bastante devido à alta volatilidade \ndo mercado de criptomoedas.")        
        break
        case "6": //sair
        alert("Obrigado por usar o gerenciador de bitcoins!")
        break
        default:
}}




