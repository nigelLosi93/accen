function score(x,y){
    if(typeof(x)!=="number" || typeof(y)!=="number") return "Not a Number!";
    let r=Math.sqrt(x**2+y**2);
    let punti;
    if(r<=1) punti= 10;
    else if(r<=5) punti= 5;
    else if(r<=10) punti= 1;
    else punti= 0;
    return "Hai totalizzato "+punti+" punti!";
}

console.log(score(1,0));
console.log(score(1,1));
console.log(score(0,5));
console.log(score(5,1));
console.log(score(7,7));
console.log(score(10,0));
console.log(score(10,1));
console.log(score(10,10));
console.log(score('ciao',10));