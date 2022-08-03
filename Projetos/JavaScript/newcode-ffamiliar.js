let familia = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00],
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
    
    console.log(`Seu saldo é:${balanceText}.
Saldo: $${total} Reais.`)
       
    }

    saldoFamiliar()