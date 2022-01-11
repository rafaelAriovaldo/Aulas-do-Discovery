let  despesasSaldo;
let receitasSaldo;
let saldoFinal;
let agua = 150.00
let luz = 175.00
let salario = 1100
let rendaExtra = 300
function getSaldo(saldoFinal){
    let despesas = {
        agua,
        luz,
        }
        let receitas = {
            salario,
            rendaExtra,
        }
      despesasSaldo = despesas.agua + despesas.luz
      receitasSaldo = receitas.salario + receitas.rendaExtra
      saldoFinal = receitasSaldo - despesasSaldo
      

if (saldoFinal > 0) {
    console.log("saldo positivo")
    console.log("R$:" + saldoFinal)
} else {
    console.log("saldo negativo")
    console.log("R$:" + saldoFinal)
}
return saldoFinal;
}
getSaldo()
// Fazer soma em arrays.