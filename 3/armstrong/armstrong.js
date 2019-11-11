function isArmstrong(value) {
    if (typeof (value) !== "number" || value <= 0 || Number.isInteger(value) === false) {
        return undefined;
    }
    else {
        let numberstring = value.toString();
        let result = 0;
        for (let i = 0; i < numberstring.length; i++) {
            result += (Number(numberstring[i])) ** 3;
        }
        if (result === value) {
            return true;
        }
        return false;
    }
}

/*console.log(isArmstrong(153));
console.log(isArmstrong(245));
console.log(isArmstrong(-123));
console.log(isArmstrong(0));
console.log(isArmstrong(true));
console.log(isArmstrong("hello"));*/

function isPangram(value) {
    if (typeof (value) !== "string") {
        return undefined;
    }
    else {
        let rosetta = "qwertyuiopasdfghjklzxcvbnm";
        let carattere = [];
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < rosetta.length; j++) {
                if (value[i] === rosetta[j]) {
                    carattere[j] = true;
                }
            }
        }
        for (let i = 0; i < carattere.length; i++) {
            if (carattere[i] === undefined) {
                return false;
            }
        }
        if (carattere.length < rosetta.length) {
            return false;
        }
        return true;
    }
}

console.log(isPangram("ciao"));
console.log(isPangram("qwertyuioplkjhgfdsazxcvbnm"));
console.log(isPangram(5));
console.log(isPangram(true));
console.log(isPangram("abcdefgzxmvnbbalskdfhghgqpwoeiruty"));
console.log(isPangram("qm"));