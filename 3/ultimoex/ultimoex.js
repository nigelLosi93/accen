function digitsum(x) {
    x = Math.abs(x);
    let z = x.toString();
    let r = 0;
    for (let i = 0; i < z.length; i++) {
        let park;
        park = Number(z[i]);
        r += park;
        park = 0;
    }
    return r;
}

function digitsum2(x) {
    x = Math.abs(x);
    let rest;
    let result = 0;
    while (x != 0) {
        rest = x % 10;
        x = (x - rest) / 10;
        result += rest;
    }
    return result;
}

console.log(digitsum(275));
console.log(digitsum(11111111));
console.log(digitsum(-1234));

console.log(digitsum2(275));
console.log(digitsum2(-1234));
console.log(digitsum2(3487263572634782348762389723651897236589726345892634578623458976234580716345786234876345781623405876134085614038761346));