function merge(left, right) { //left e right sono vettori ORDINATI
    let vettore = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        vettore[i + j] = 0;
        if (left[i] < right[j]) {
            vettore[i + j] = left[i];
            i++;
        }
        else {
            vettore[i + j] = right[j];
            j++;
        }
    }
    if (i === left.length) {
        while (j < right.length) {
            vettore[i + j] = right[j];
            j++;
        }
    } else if (j === right.length) {
        while (i < left.length) {
            vettore[i + j] = left[i];
            i++;
        }
    }
    return vettore;
}

console.log(merge([1, 2, 3, 4], [5, 6, 7, 8]));
console.log(merge([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(merge([8, 9, 10, 11, 12], [5, 6, 7, 8]));
console.log(merge([1, 2, 3, 4, 5], [0, 6, 7, 8]));