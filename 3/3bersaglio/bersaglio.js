function score(x,y){
    let r=Math.sqrt(x**2+y**2);
    if(r<=1) return 10;
    if(r<=5) return 5;
    if(r<=10) return 1;
    else return 0;
}

console.log(score(1,0));
console.log(score(1,1));
console.log(score(0,5));
console.log(score(5,1));
console.log(score(7,7));
console.log(score(10,0));
console.log(score(10,1));
console.log(score(10,10));