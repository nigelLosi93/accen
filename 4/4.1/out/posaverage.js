function posAverage(s) {
    let numbers = s.split(', ');
    let cont = 0;
    let norm = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            for (let k = 0; k < numbers[0].length; k++) {
                norm++;
                if (numbers[i][k] === numbers[j][k]) {
                    cont++;
                }
            }
        }
    }
    return (cont * 100 / norm);
}
console.log(posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"));
//console.log(posAverage("069060, 069060"));
//console.log(posAverage("111111, 111222"));
//console.log(posAverage("111111, 111111, 111111, 111111, 111111, 111111"));
//console.log(posAverage("6900690040, 6900690040, 6900690041"));
//# sourceMappingURL=posaverage.js.map