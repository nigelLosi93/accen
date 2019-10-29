function matrixRow(data) {
    let sum = [];
    for (let i = 0; i < data.length; i++) {
        sum[i] = 0;
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] === undefined) {
                continue;
            }
            sum[i] += data[i][j];
        }
    }
    return sum;
}

console.log(matrixRow([[0, 1, 2], [3, 4, 5], [6, 7, 8]]));
console.log(matrixRow([[0, 1], [2, 3, 4], [5, 6, 7]]));
console.log(matrixRow([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]));


function matrixCol(data) {
    let sum = [];
    let maxRow = data.length;
    let maxCol = 0;
    
    for (let i = 0; i < data.length; i++) {
        if (maxCol < data[i].length)
            maxCol = data[i].length;
    }

    for (let i = 0; i < maxCol; i++) {
        sum[i] = 0;
        for (let j = 0; j < maxRow; j++) {
            if (data[j][i] === undefined) {
                data[j][i] = 0;
            }
            sum[i] += data[j][i];
        }
    }
    return sum;
}

console.log(matrixCol([[0, 1, 2], [3, 4, 5], [6, 7, 8]]));
console.log(matrixCol([[0, 1], [2, 3, 4], [5, 6, 7]]));
console.log(matrixCol([[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10, 11]]));
