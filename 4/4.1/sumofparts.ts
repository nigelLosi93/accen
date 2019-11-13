function partsSums(ls: number[]): number[] {
    let vect: number[] = new Array(ls.length + 1);
    vect.fill(0);
    for (let i = vect.length - 1; i > 0; i--) {
        vect[i - 1] = ls[i - 1] + vect[i];
    }
    return vect;
}

console.log(partsSums([1, 1]));
console.log(partsSums([0, 1, 3, 6, 10]));