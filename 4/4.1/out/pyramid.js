function pyramid(n) {
    if (n == 0) {
        return [];
    }
    else {
        let vector = [];
        let vectorsmall = [];
        for (let i = 0; i < n; i++) {
            vectorsmall = [];
            for (let j = 0; j <= i; j++) {
                vectorsmall.push(1);
            }
            vector.push(vectorsmall);
        }
        return vector;
    }
}
console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(5));
//# sourceMappingURL=pyramid.js.map