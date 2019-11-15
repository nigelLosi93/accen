function backwardsPrime(start: number, stop: number): number[] {
    let primevector: number[] = getPrimes(start, stop);
    if (primevector == [0]) {
        return primevector;
    }
    else {
        let primevectorstring: string[] = new Array(primevector.length);
        let result: number[] = [];
        let k: number = 0;
        let x: string;
        for (let i = 0; i < primevector.length; i++) { //per ogni numero primo...
            primevectorstring[i] = primevector[i].toString(); //converto in stringhe per lavorarci su
            x = '';                                             //lo inizializzo a stringa vuota all'inizio di ogni ciclo
            for (let j = 0; j < primevectorstring[i].length; j++) {
                x += primevectorstring[i][primevectorstring[i].length - 1 - j]; //determino x invertendo il numero
            }
            for (let j = 0; j < primevectorstring.length; j++) { //scorro il vettore di stringhe di numeri primi
                if (x == primevectorstring[j]) {
                    result[k] = Number(x);
                    if (x.length == 1 || primevector[i] == primevector[j]) {
                        k++;
                    }
                    else {
                        result[k + 1] = primevector[i];
                        k += 2;
                    }
                }
            }
            x = '';
        }
        result.sort((a, b) => { return b < a ? 1 : a == b ? 0 : -1 });
        return result;
    }
}

function getPrimes(start: number, stop: number): number[] {
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
    return primevector;
}

console.log(backwardsPrime(2, 100));