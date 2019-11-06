function countNeighbours(data, row, col) {
    let contatore = 0;
    let rowbegin = row - 1;
    let rowend = row + 1;
    let colbegin = col - 1;
    let colend = col + 1;
    if (row === 0) {
        rowbegin = 0;
    }
    if (row === data[0].length - 1) {
        rowend = data[0].length - 1;
    }
    if (col === 0) {
        colbegin = 0;
    }
    if (col === data.length - 1) {
        colend = data.length - 1;
    }
    for (let i = rowbegin; i <= rowend; i++) {
        for (let j = colbegin; j <= colend; j++) {
            if (i === row && j === col) {
                continue;
            }
            else if (data[i][j] === 1) {
                console.log(data[i][j]);
                contatore += 1;
            }
        }
    }
    return contatore;
}

console.log(countNeighbours([[1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0]], 5, 4));