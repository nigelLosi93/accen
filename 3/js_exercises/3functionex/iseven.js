function isEven(x) {
    if (typeof (x) != "number")
        return undefined;
    if (x < 0)
        return undefined;
    if (x % 2 === 0)
        return true;
    else if (x % 2 === 1)
        return false;
    else
        return undefined;
}

console.log(isEven(10) === true);
console.log(isEven(9) === false);
console.log(isEven(3.4) === undefined);
console.log(isEven(-12) === undefined);
console.log(isEven('ciao') === undefined);
console.log(isEven(true) === undefined);
console.log(isEven(0) === true);
console.log(isEven() === undefined);