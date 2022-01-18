
function getTempera(temp) {
    const celsius = temp.toUpperCase().includes('C')
    const farennite = temp.toUpperCase().includes('F')

    if (!celsius && !farennite) {
        throw new Error('grau não identificado')
    }
    let updateTemp = Number(temp.toUpperCase().replace("F", ""));
    let formula = farennite => (farennite - 32) * 5 / 9
    let tempSingn = 'C'
    if (celsius) {
        updateTemp = Number(temp.toUpperCase().replace("C", ""));
        formula = celsius => (celsius * 9) * 5 + 32
        tempSingn = 'F'
    }

    return formula(updateTemp) + tempSingn;

}

try {
    console.log(getTempera('50C'))
    console.log(getTempera('50F'))
    console.log(getTempera('50Z'))
} catch (error) {
    console.log(error.message)
}




/*
C = "celsius"
let c = (n - 32) * 5 / 9
console.log(c + " " + C + ".")
F = "Farenit"
let f = n * 9 / 5 + 32
console.log(f + " " + F + ".")

*/


