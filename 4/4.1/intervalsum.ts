function sumIntervals(intervals: number[][]): number {
    let vector: number[][] = intervals.slice();
    for (let i = 0; i < vector.length - 1; i++) {
        for (let j = i + 1; j < vector.length; j++) {
            if (vector[i][1] > vector[j][0] && i !== j) {
                vector[i] = [vector[i][0], vector[j][1]];
                vector.splice(j, j + 1);
            }
        }
    }
    let cont: number = 0;
    for (let i = 0; i < vector.length; i++) {
        cont += vector[i][1] - vector[i][0];
    }
    return cont;
}

//console.log(sumIntervals([[1, 5]]));
//console.log(sumIntervals([[1, 5], [6, 10]]));
console.log(sumIntervals([[1, 5], [6, 10], [9, 15], [15, 27], [12, 31], [13, 66], [1, 100], [55, 56]]));