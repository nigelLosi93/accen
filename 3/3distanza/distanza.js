function distanza(x1, y1, x2, y2) {
    if (typeof (x1) !== "number" || typeof (x2) !== "number" || typeof (y1) !== "number" || typeof (y1) !== "number") {
        return "Not a number!";
    }
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

console.log(distanza(0, 0, 1, 1));
console.log(distanza(0, 0, 0, 0));
console.log(distanza(-12, 15, 32, 7));
console.log(distanza(17, 17, 17, 17));
console.log(distanza('ciao', 17, 17, 17));
