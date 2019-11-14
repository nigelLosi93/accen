function backwardsPrime(start: number, stop: number): number[] {
    let primecounter: number = 0;
    let primevector: number[] = [];
    for (let i = start; i < stop; i++) {
        for (let j = 2; j <= Math.ceil(Math.sqrt(i)); j++) {
            if (i % j == 0) {
                primecounter++;
            }
        }
        if ((primecounter == 0 && i != 1) || (i == 2)) {
            primevector.push(i);
        }
        primecounter = 0;
    }
    if (primevector.length == 0) {
        return [0];
    }
    else {
        console.log(primevector);
        let primevectorstring: string[] = [];
        for (let i = 0; i < primevector.length; i++) {
            primevectorstring.push[primevector[i].toString()];
        }
        let reversestring: string[] = [];
        /*for (let i = 0; i < primevectorstring.length; i++) {
            if (primevectorstring[i] == primevectorstring[primevectorstring.length - i - 1]) {
                reversestring.push(primevectorstring[i]);
            }
        }*/
        for (let i = 0; i < primevectorstring.length; i++){
            
        }
        let reverse: number[] = [];
        for (let i = 0; i < reversestring.length; i++) {
            reverse.push(Number(reversestring[i]));
        }
        return reverse;
    }
}

console.log(backwardsPrime(1, 100));