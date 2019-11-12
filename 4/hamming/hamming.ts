function hamming(left: string, right: string): number {
    if (left.length !== right.length) {
        throw "Not of equal length!";
    }
    let distance: number = 0;
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            distance++;
        }
    }
    return distance;
}

/*try {
    console.log(hamming("ciao", "ciap"));
    console.log(hamming("ciao", "ciao"));
    console.log(hamming("4", "5"));
    console.log(hamming("", ""));
    console.log(hamming("ciao", "loremipsum"));
    console.log(hamming("ciaocanerepolopo", "derolipuzacoaspo"));
} catch (exc) {
    console.log(exc);
} finally {
    console.log("done");
}*/



function digital_root(n) {
    let number = n.toString();
    while (number.length >= 1) {
        let result = 0;
        for (let i = 0; i < number.length; i++) {
            result += Number(number[i]);
        }
        number = result.toString();
    }
    return number;
}

//console.log(digital_root(1356));

function isIsogram(str) {
    if (str.length === 0) {
        return true;
    }
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] && i !== j) {
                return false;
            }
        }
    }
    return true;
}

var isSquare = function (n) {
    if (Math.sqrt(n) === Math.floor(Math.sqrt(n))) {
        return true;
    }
    return false;
}

function addBinary(a, b) {
    let x = a + b;
    let binario;
    let i = 0;
    while (x >= 1) {
        binario += (x % 2).toString();
        i++;
        x = Math.floor(x / 2);
    }
    return binario;
}

function friend(friends) {
    let lung = friends.length;
    for (let i = 0; i < lung; i++) {
        if (friends[i].length === 4) {
            friends = friends.splice(i, 1);
        }
    }
    console.log(lung);
    return friends;
}

//console.log(friend(["Ryan", "Kieran", "Mark"]));

var uniqueInOrder = function (iterable) {

    for (let x of iterable) {

    }
    return;
}


export const findOdd = (xs: number[]): number => {
    let map: any = new Map();
    for (let i = 0; i < xs.length; i++) {
        map.set(xs[i], false);
    }
    for (let i = 0; i < xs.length; i++) {
        map.set(xs[i], !map.get(xs[i]));
    }
    for (let [k, v] of map) {
        if (v === true) {
            return k;
        }
    }
    return -1;
};

//console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6]));


export function getSum(a: number, b: number): number {
    let max: number = 0;
    let min: number = 0;
    if (b > a) {
        max = b;
        min = a;
    }
    else {
        max = a;
        min = b;
    }
    let result: number = 0;
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
}


//export class G964 {
function printerError(s: string): string {
    let rosetta: string = "nopqrstuvwxyz";
    let cont: number = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < rosetta.length; j++) {
            if (s[i] === rosetta[j]) {
                cont++;
            }
        }
    }
    let conts: string = cont.toString();
    let lungs: string = s.length.toString();
    return conts + '/' + lungs;
}
//}

//console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

//return the total number of smiling faces in the array
function countSmileys(arr: string[]) {
    let cont: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === 2) {
            if ((arr[i][0] === ':' || arr[i][0] === ';') && (arr[i][1] === ')' || arr[i][1] === 'D')) {
                console.log(arr[i][1] === 'D');
                cont++;
            }
        }
        else if (arr[i].length === 3) {
            if ((arr[i][0] === ':' || arr[i][0] === ';') && (arr[i][1] === '-' || arr[i][1] === '~')
                && (arr[i][2] === ')' || arr[i][2] === 'D')) {
                cont++;
            }
        }
    }
    return cont;
}

//console.log(countSmileys([':)',':(',':D',':O',':;']));

/*function solution(roman: string): number {
    let map:any = new Map();
    map.set("M", 1000);
    map.set("D", 500);
    map.set("C", 100);
    map.set("L", 50);
    map.set("X", 10);
    map.set("V", 5);
    map.set("I", 1);
    let result:number=0;
    for(let i=0;i<roman.length;i++){
        for(let [k,v] of map){
            if(roman[i]===k){
                result+=v;
            }
        }
    }
    return result;
}*/

//console.log(solution("IX"));

function solution(roman: string): number {
    let vectsimbol = ["M", "D", "C", "L", "X", "V", "I"];
    let vectvalue = [1000, 500, 100, 50, 10, 5, 1];
    let result: number = 0;
    for (let i = 0; i < roman.length; i++) {
        for (let j = 0; j < vectsimbol.length; j++) {
            if (roman[i] === vectsimbol[j]) {
                result += vectvalue[j];
            }
        }
    }
    for (let i = 0; i < roman.length; i++){
        for (let j = 0; j < vectsimbol.length; j++){
            if(roman[i]===vectsimbol[j] && )
        }
    }
        return result;
}

console.log(solution("X"));