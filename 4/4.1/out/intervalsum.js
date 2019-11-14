function sumOfIntervals(intervals) {
    let vector = intervals.slice();
    console.log(vector);
    console.log("next");
    for (let k = 0; k < 10; k++) {
        for (let i = 0; i < vector.length - 1; i++) {
            for (let j = i + 1; j < vector.length; j++) {
                let i0 = vector[i][0];
                let i1 = vector[i][1];
                let j0 = vector[j][0];
                let j1 = vector[j][1];
                if (i0 < j0 && j1 <= i1) { //caso 1
                    vector[j] = [0, 0];
                }
                if (j0 <= i0 && i1 <= j1) { //caso 2
                    vector[i] = [0, 0];
                }
                if (j0 <= i0 && i0 <= j1 && j1 <= i1) { //caso 4
                    vector[i] = [j0, i1];
                    vector[j] = [0, 0];
                }
                if (i0 <= j0 && j0 <= i1 && i1 <= j1) { //caso 3
                    vector[i] = [i0, j1];
                    vector[j] = [0, 0];
                }
            }
        }
    }
    let cont = 0;
    for (let i = 0; i < vector.length; i++) {
        cont += vector[i][1] - vector[i][0];
    }
    console.log(vector);
    return cont;
}
//console.log(sumOfIntervals([[1, 5]]));
//console.log(sumOfIntervals([[1, 5], [6, 10]]));
//console.log(sumOfIntervals([[1, 5], [6, 10], [9, 15], [15, 27], [12, 31], [13, 66], [1, 100], [55, 56]]));
//console.log(sumOfIntervals([[5, 12], [1, 100]]));
console.log(sumOfIntervals([[-428, 344],
    [358, 431],
    [-216, -213],
    [409, 491],
    [200, 317],
    [47, 98],
    [120, 406],
    [-79, 290],
    [-118, 371],
    [350, 446],
    [426, 493],
    [22, 411]]));
//# sourceMappingURL=intervalsum.js.map