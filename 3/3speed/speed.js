function speed(distanza, tempo) {
    if (typeof (distanza) != 'number' || typeof (tempo) != 'number') {
        return undefined;
    }

    else if (distanza <= 0 || tempo <= 0) {
        return undefined;
    }
    else {
        return distanza/tempo +' m/s';
    }

}

console.log(speed('ciao', 7));
console.log(speed(5, 7));
console.log(speed(5, -7));
console.log(speed(-5, 7));
console.log(speed(true, 7));
console.log(speed(0, 7));
console.log(speed(5, 0));
console.log(speed(0, 0));
console.log(speed(5.76786, 10**308));