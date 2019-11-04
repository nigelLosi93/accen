function betweenMarkers(text, begin, end) {
    let initial = 0;
    let final = text.length;
    for (let i = 0; i < text.length; i++) {
        if (text.substring(i, i + begin.length) === begin) { initial = i; }
        if (text.substring(i, i + end.length) === end) { final = i; }
    }
    if (final < initial) { return ''; }
    console.log(initial);
    console.log(final);
    console.log(begin.length);
    console.log(initial + begin.length);
    console.log(text.substring(initial + begin.length, final));
    if (initial === 0) { return text.substring(initial, final); }
    else { return text.substring(initial + begin.length, final); }
}

//console.log(betweenMarkers("Never send a human to do a machine's job.", "Never", "do"));


function numberRadix(str_number, radix) {
    let rosetta = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = str_number.split('');
    number = number.reverse();
    let value = 0;
    for (let j = 0; j < number.length; j++) {
        for(let l=0;l<rosetta.length;l++){
            if(number[j]===rosetta[l]){number[j]=l;}
            if (number[j] >= radix) {
                return -1;
            }
        }
    }
    for (let i = 0; i < number.length; i++) {
        console.log('oiiii');
        if (isNaN(number[i])) {
            for (let j = 0; j < rosetta.length; j++) {
                console.log('oi');
                if (number[i] === rosetta[j]) {
                    number[i] = j;
                    break;
                }
            }
        }
            value += number[i] * (radix) ** i;
            console.log(`value ${value} number[i] ${number[i]} radix ${radix}`)
        
    }
    return value;
}

console.log(numberRadix("101", 2));
console.log(numberRadix("AB",10));