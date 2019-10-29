function getSingle(v) {
    for (let i = 0; i < v.length; i++) {
        let park = 0;
        for (let j = 0; j < v.length; j++) {
            if (v[i] === v[j]) {
                park++;
            }
        }
        if (park === 1) {
            return v[i];
        }
    }
    return "Nessun valore singolo";
}

console.log(getSingle([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6]));
console.log(getSingle([1, 1, 2]));
console.log(getSingle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]));


function getSingle2(v) { //assuming that the numbers are "small", ie < some number, say 100
    let vectbool = [];
    for (let i = 0; i < 100; i++) {
        vectbool[i] = false;
    }
    for (let i = 0; i < v.length; i++) {
        vectbool[v[i]] = (!vectbool[v[i]]);
    }
    for (let i = 0; i < 100; i++) {
        if (vectbool[i]) {
            return i;
        }
    }
    return "Nessun valore singolo"
}

console.log(getSingle2([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6]));
console.log(getSingle2([1, 1, 2]));
console.log(getSingle2([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]));
console.log(getSingle2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 99]));


function getSingle3(v) { //utilizing a hash function
    ht = {};
    for (let i = 0; i < v.length; i++) {
        ht[v[i]] = false;
    }
    for (let i = 0; i < v.length; i++) {
        ht[v[i]] = (!ht[v[i]]);
    }
    let vect = Object.keys(ht);
    for (let i = 0; i < vect.length; i++) {
        if (ht[vect[i]]===true) {
            return i;
        }
    }
    return "Nessun valore singolo"
}

console.log(getSingle3([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6]));
console.log(getSingle3([1, 1, 2]));
console.log(getSingle3([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]));
console.log(getSingle3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 99]));