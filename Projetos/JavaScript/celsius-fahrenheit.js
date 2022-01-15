


function conversion(n, C, F, ) {

    C = "celsius";
    
    let c = (n - 32) * 5 / 9
    console.log(c + " " + C + ".")
    
    F = "fahenheit"
    let f = n * 9 / 5 + 32
    console.log(f + " " + F + ".")
    return n;
    
}

conversion(50)