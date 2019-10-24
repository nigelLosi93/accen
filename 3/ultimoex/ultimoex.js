function digitsum(x) {
    x = Math.abs(x);
    let z = x.toString();
    let r = 0;
    for (let i = 0; i < z.length; i++) {
        if (z[i] === '.') { //in case the number is of the kind 348934.5892383
            continue;
        }
        r += Number(z[i]);
    }
    return r;
}

function digitsum2(x) {
    x = Math.abs(x);
    //converting decimal to integer
    let z = x.toString();
    let lung = z.length;
    let point;
    let decimal = false;
    for (let i = 0; i < lung; i++) {
        if (z[i] === '.') { //in case the number is of the kind 348934.5892383
            point = i;
            decimal = true;
            continue;
        }
    }

    if (decimal === true) {
        x = x * 10 ** (lung - point - 1);
    }

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
console.log(digitsum(-12.34));

console.log(digitsum2(275));
console.log(digitsum2(-12.34));
console.log(digitsum2(1111111111111));

//il codice dà problemi per numeri "grandi", di ordine >10**50 