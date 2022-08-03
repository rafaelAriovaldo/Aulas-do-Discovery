let familia = {
    receitas: [0, 0, 0, 0],
    despesas: [0, 0, 0, 0],
}

function soma(array) {
    let total = 0;
    for (let value of array) {
        total += value
    }
    return total;
}

function saldoFamiliar() {
    const receitaTotal = soma(familia.receitas)
    const despesasTotal = soma(familia.despesas)

    const total = receitaTotal - despesasTotal

    const itOk = total
    let balanceText
    if (itOk >= 0) {
     balanceText = "Positivo"
    } else {
        balanceText ="Negativo"
    }
    if(itOk === 0){
        balanceText = "Conta vazia"
    }
    
    console.log(`Seu saldo é:${balanceText}.
Saldo: $${total} Reais.`)
       
    }

    saldoFamiliar()