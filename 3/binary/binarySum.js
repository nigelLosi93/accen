function binarySum(left, right) {
    let leftNum = 0;
    let rightNum = 0;
    let j = 0;
    for (let i = left.length - 1; i >= 0; i--) {
        leftNum += left[i] * 2 ** (j);
        ++j;
    }
    j = 0;
    for (let i = right.length - 1; i >= 0; i--) {
        rightNum += right[i] * 2 ** (j);
        ++j;
    }
    let sum = leftNum + rightNum;
    let result = [];
    let k = 0;
    while (sum !== 1) {
        result[k] = sum % 2;
        sum = Math.floor(sum / 2);
        ++k;
    }
    result[k] = 1;
    result = result.reverse();
    result = result.join('');
    return result;
}

console.log(binarySum('101', '110'));
console.log(binarySum('10101011', '1111100'));
console.log(binarySum('101000001', '11011110101010'));

function binarySum2(left, right) {
    let result = [];
    let remainder = '0';
    let maxlength = 0;
    let index = false;
    if (left.length > right.length) { maxlength = left.length; } else { maxlength = right.length; }
    for (let i = maxlength - 1; i >= 0; i--) {
        result[i] = '0';
        if (left[i] === '0' && right[i] === '0' && remainder === '0') {
            result[i] = '0';
            remainder = '0';
            index = false;
        }
        else if (left[i] === '1' && right[i] === '0' && remainder === '0' ||
            left[i] === '0' && right[i] === '1' && remainder === '0' ||
            left[i] === '0' && right[i] === '0' && remainder === '1') {
            result[i] = '1';
            remainder = '0';
            index = false;

        }
        else if (left[i] === '1' && right[i] === '1' && remainder === '0' ||
            left[i] === '0' && right[i] === '1' && remainder === '1' ||
            left[i] === '1' && right[i] === '0' && remainder === '1') {
            result[i] = '0';
            remainder = '1';
            index = true;


        }
        else {
            result[i] = '1';
            remainder = '1';
            index = true;

        }
    }
    if (index) {
        return '1' + result.join('');
    }
    return result.join('');
}

console.log(binarySum2('0', '1'));
console.log(binarySum2('1', '1'));
console.log(binarySum2('101', '000'));
console.log(binarySum2('1011', '0000'));
console.log(binarySum2('1011', '0001'));
console.log(binarySum2('1011', '1000'));