


function conversion(F) {

    let C = "celsius";
    let c = (F - 32) * 5/9
    console.log(c + " " + C + ".")
    return F;
}   

function conversion1(C){
    let F = "fahenheit"
    let f = C * 9/5 + 32
    console.log(f + " " + F + ".")
    return C;
}


conversion(50)