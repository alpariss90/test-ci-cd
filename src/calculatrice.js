function addition(a,b){
    return a+b;
}

function soustraction(c,d){
    return c-d;
}


function multiplication(a, e){
    return a * e;
}

function division(p, q){
    if(q==0) throw new("Erreur division: Division par zero impossible")
    return p/q;
}

module.exports={addition, soustraction, multiplication, division}