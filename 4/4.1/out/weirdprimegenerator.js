function gcd(a, b) {
    if (b > a) {
        [a, b] = [b, a];
    }
    let x = a % b;
    if (a % x === 0 && b % x === 0) {
        return x;
    }
    return gcd(1, 1);
}
console.log(gcd(6, 9));
console.log(gcd(12, 5));
console.log(gcd(666, 18));
//# sourceMappingURL=weirdprimegenerator.js.map