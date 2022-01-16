


function conversion(n, C, F, V ) {
    if(V == F){
    C = "celsius";
    
    let c = (n - 32) * 5 / 9
    console.log(c + " " + C + ".")
    }
    else if (V == C){
    F = "fahenheit"
    let f = n * 9 / 5 + 32
    console.log(f + " " + F + ".")
    }
    return n;
    
}

conversion(50,"celsius")
