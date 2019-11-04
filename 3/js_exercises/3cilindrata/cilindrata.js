function cilindrata(corsa, alesaggio, cilindri){
    corsa/=10;
    alesaggio/=10;
    let cilindrata = (alesaggio**2)*corsa*Math.PI/4*cilindri;
    return cilindrata+" cm^3";
}

console.log('Cilindrata Toyota Yaris '+cilindrata(90.6,72.5,4));
console.log('Cilindrata Ferrari SF70H '+cilindrata(53,80,6));