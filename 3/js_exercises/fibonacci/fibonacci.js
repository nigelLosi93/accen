function fibonacci(n) {
    let prev = 0;
    let curr = 1;
    for (let i = 0; i < n; i++) {
        let park = prev + curr;
        prev = curr;
        curr = park;
    }
    return curr;

}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(100));
console.log(fibonacci(1000));
console.log(fibonacci(10000));


function fibric(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return fibric(n - 1) + fibric(n - 2);
    }
}

console.log(fibric(1));
console.log(fibric(2));
console.log(fibric(3));
console.log(fibric(4));

let cache = [];
cache[0] = 1;
cache[1] = 1;
function fibriclinear(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else if (cache[n - 1] === undefined || cache[n - 2] === undefined) {
        cache[n - 1] = fibriclinear(n - 1);
        cache[n - 2] = fibriclinear(n - 2);
        return cache[n - 1] + cache[n - 2];
    }
    else {
        return cache[n - 1] + cache[n - 2];
    }
}

console.log(fibriclinear(5));
console.log(fibriclinear(6));
console.log(fibriclinear(7));
console.log(fibriclinear(8));
console.log(fibriclinear(10));
console.log(fibriclinear(20));
console.log(fibriclinear(30));
console.log(fibriclinear(35));
console.log(fibriclinear(40));
console.log(fibriclinear(50));
console.log(fibriclinear(60));
console.log(fibriclinear(70));
console.log(fibriclinear(80));
console.log(fibriclinear(100));