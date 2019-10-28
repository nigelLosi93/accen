function findPosition(data, value) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === value || isNaN(value) && isNaN(data[i])) {
            return i;
        }
    }
    return -1;
}

console.log(findPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 5) === 4);
console.log(findPosition([NaN, 1], 1) === 1);
console.log(findPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 5], 5) === 4);
console.log(findPosition(['1', 1], 1) === 1);
console.log(findPosition([], 5) === -1);
console.log(findPosition([NaN, 5, 6, 7, 8, null], null) === 5);
console.log(findPosition([1, 2, NaN], NaN) === 2);
console.log(findPosition([1, 2, 3, 4, 5, 6, 7], 8) === -1);
console.log(findPosition([1, 2, NaN], 5) === -1);