function friend(friends) {
    let i = 0;
    while (friends[i] !== undefined) {
        if (friends[i].length !== 4) {
            friends.splice(i, 1);
            i--;
        }
        i++;
    }
    return friends;
}

//console.log(friend(["Ryan", "Kieran", "Mark"]));
//console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]));

var countBits = function (n) {
    let number = n.toString(2);
    let cont = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] === '1') {
            cont++;
        }
    }
    return cont;
};

function disemvowel(str) {
    let rosetta = "aeiou";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < rosetta.length; j++) {
            if (str[i] === rosetta[j]) {
                str = str.replace(rosetta[j], '');
            }
        }
    }
    return str;
}

//console.log(disemvowel('N ffns bt,\nYr wrtng s mng th wrst \'v vr rad'));



var uniqueInOrder = function (iterable) {
    for (let x of iterable) {
        //console.log(x);
        //console.log(x + 1);
    }
    return;
}

function rowSumOddNumbers(n) {
    let result = 0;
    let num = -1;
    for (let i = 1; i <= n * (n + 1) / 2; i++) {
        num += 2;
        if (i <= (n - 1) * n / 2) {
            continue;
        }
        result += num;
    }
    return result;
}


function findEvenIndex(arr) {
    let left = 0;
    let right = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 0; j < i; j++) {
            left += arr[j];
        }
        for (let k = arr.length - 1; k > i; k--) {
            right += arr[k]
        }
        if (left === right) {
            return i;
        }
        left = 0;
        right = 0;
    }
    return -1;
}


function duplicateCount(text) {
    text = text.toLowerCase();
    let obj = {};
    for (let i = 0; i < text.length; i++) {
        obj[text[i]] = 0;
    }
    for (let i = 0; i < text.length; i++) {
        obj[text[i]] += 1;
    }
    let cont = 0;
    console.log(obj);
    let vectorvalues = Object.values(obj);
    for (let i = 0; i < vectorvalues.length; i++) {
        if (vectorvalues[i] > 1) {
            cont++;
        }
    }
    return cont;
}

//console.log(duplicateCount("aaaaabbbbbcdddddejdjdj"));


function findOdd(A) {
    let obj = {};
    for (let i = 0; i < A.length; i++) {
        obj[A[i]] = 0;
    }
    for (let i = 0; i < A.length; i++) {
        obj[A[i]] += 1;
    }
    console.log(obj);
    let vectorvalues = Object.values(obj);
    for (let i = 0; i < vectorvalues.length; i++) {
        if (vectorvalues[i] % 2 === 1) {
            return Number(Object.keys(obj)[i]);
        }
    }
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6]));