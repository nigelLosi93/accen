function roman(decimal) {
    decimal = Number(decimal);
    let romansimbol = [['I', 'II', 'III', 'VI', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'DC', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M', 'MM', 'MMM']];
    let numlength = decimal.toString().length;
    let result = '';
    for (let i = numlength - 1; i >= 0; i--) {
        let div = Math.floor(decimal / (10 ** i));
        decimal = decimal % 10 ** i;
        if (div === 0) {
            continue;
        }
        result += romansimbol[i][div - 1];
    }
    return result;
}
console.log(roman(49));

function convert() {
    let decimal = document.getElementById('decimal').value;
    if (Number.isNaN(Number(decimal))) {
        alert("Inserire un numero");
        return;
    }
    else if (Number(decimal) < 1 || Number(decimal) > 3999) {
        alert('Inserire un numero tra 1 e 3999');
        return;
    }
    else {
        document.getElementById('risultatoromano').innerHTML = roman(decimal);
        return;
    }
}