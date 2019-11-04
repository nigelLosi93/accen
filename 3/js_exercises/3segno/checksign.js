function checkSign(x) {
    if (typeof (x) !== "number") return undefined;
    if (x > 0) return "positive";
    else if (x < 0) return "negative";
    else return "zero";
}

console.log(checkSign(2) === "positive");
console.log(checkSign(2 - 23) === "negative");
console.log(checkSign(0) === "zero");
console.log(checkSign('ciao') === undefined);

function isOdd(x) {
    if (typeof (x) !== "number" || x < 0) return undefined;
    if (x % 2 === 1) return true;
    else return false;
}

console.log(isOdd(12) === false);
console.log(isOdd(11) === true);
console.log(isOdd(0) === false);
console.log(isOdd(-2) === undefined);
console.log(isOdd('ciao') === undefined);

function asWord(x) {
    if (x === 1) return "one";
    else if (x === 2) return "two";
    else if (x === 3) return "three";
    else if (x === 4) return "four";
    else if (x === 5) return "five";
    else if (x === 6) return "six";
    else if (x === 7) return "seven";
    else if (x === 8) return "eigth";
    else if (x === 9) return "nine";
    else return undefined;
}

console.log(asWord(1) === "one");
console.log(asWord(2) === "two");
console.log(asWord(3) === "three");
console.log(asWord(4) === "four");
console.log(asWord(5) === "five");
console.log(asWord(6) === "six");
console.log(asWord(7) === "seven");
console.log(asWord(8) === "eigth");
console.log(asWord(9) === "nine");
console.log(asWord(10) === undefined);
console.log(asWord('ciao') === undefined);

function matrixRow() {
    let data = [[0, 1, 2], [3, 4, 5,], [6, 7, 8,]];
    let sum = [];
    sum.length = data.length;
    for(let i = 0; i < sum.length; i++) {
        sum[i]=0;
    }
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            sum[i] += data[i][j];
        }
    }
    return sum;
}

console.log(matrixRow());

function matrixCol() {
    let data = [[0, 1, 2], [3, 4, 5,], [6, 7, 8,]];
    let sum = [];
    sum.length = data.length;
    for(let i = 0; i < sum.length; i++) {
        sum[i]=0;
    }
    
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            sum[i] += data[j][i];
        }
    }
    return sum;
}

console.log(matrixCol());