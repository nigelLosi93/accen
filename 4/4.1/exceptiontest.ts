function hamming(left: string, right: string): number {
    if (left.length !== right.length) {
        throw "Not of equal length!";
    }
    let distance: number = 0;
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            distance++;
        }
    }
    return distance;
}

/*try {
    console.log(hamming("ciao", "ciap"));
    console.log(hamming("ciao", "ciao"));
    console.log(hamming("4", "5"));
    console.log(hamming("", ""));
    console.log(hamming("ciao", "loremipsum"));
    console.log(hamming("ciaocanerepolopo", "derolipuzacoaspo"));
} catch (exc) {
    console.log(exc);
} finally {
    console.log("done");
}*/



//folding an array
/*function foldArray(array: number[], runs: number): number[] {
    let vettore: number[] = array;
    for (let i = 0; i < runs; i++) {
        for (let j = 0, k = vettore.length; j < k - 1; j++ , k--) {
            vettore[j] += vettore[k - 1];
        }
        vettore = vettore.slice(0, Math.ceil(vettore.length / 2));
    }
    return vettore;
}

console.log(foldArray([1, 2, 3, 4, 5], 1));
console.log(foldArray([1, 2, 3, 4, 5 ], 2));
console.log(foldArray([1, 2, 3, 4, 5], 3));
console.log(foldArray([-9, 9, -8, 8, 66, 23], 1));
console.log(foldArray([1], 5));
*/



export function foldArray(array: number[], runs: number): number[] {
    let vettore: number[] = array.slice();
    for (let i = 0; i < runs; i++) {
        for (let j = 0, k = vettore.length - 1; j < k; j++ , k--) {
            vettore[j] += vettore[k];
        }
        vettore = vettore.slice(0, Math.ceil(vettore.length / 2));
    }
    return vettore;
}

console.log(foldArray([1, 2, 3, 4, 5], 2));