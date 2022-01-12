
let familia = {
receitas: [100, 250, 300, 400],
despesas: [50, 233, 25.5, 63.4],
}

function soma(array){
let total = 0;
for(let value of array) {
     total += value
}
}

function saldoFamiliar (){
  const receitaTotal = soma(familia.receitas)
   const despesasTotal = soma(familia.despesas)

   const total = receitaTotal - despesasTotal
 
 const itOk = total >= 0
 let  balanceText = "negativo"
 
if (itOk) {

      balanceText = "positivo"
}
console.log(`seu saldo é: ${balanceText} : ${total}`)
}

saldoFamiliar()