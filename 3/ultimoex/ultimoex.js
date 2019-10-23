function digitsum(x) {
    x=Math.abs(x);
    let z = x.toString();
    let r=0;
    for (let i = 0; i < z.length; i++) {
        let park;
        park=Number(z[i]);
        r += park;
        park=0;
    }
    return r;
}

console.log(digitsum(27));
console.log(digitsum(275));
console.log(digitsum(11111111));
console.log(digitsum(-1234));