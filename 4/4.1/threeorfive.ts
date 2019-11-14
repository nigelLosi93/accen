function solution(number) {
    let cont: number = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            cont += i;
        }
    }
    return cont;
}

console.log(solution(10));