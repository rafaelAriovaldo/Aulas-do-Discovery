function getTable(number2) {
    let number1 = 0
    while (number1 < 10) {
        number1++;
        let result = number1 * number2;
        console.log(`${number1} x ${number2} = ${result}.`)
        if (number1 == 10) {
            console.log("The end..")
        }


    }
    return number2;

}
getTable(5)
getTable(4)