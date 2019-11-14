function wave(str: string): Array<string> {
    let result: any = new Array(str.length).fill('');
    let white: number[] = new Array();
    let k = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (i == j && str[i] == ' ') {
                white[k] = i;
                k++
            }
            if (i == j) {
                result[i] += str[j].toUpperCase();
                continue;
            }
            result[i] += str[j];
        }
    }
    console.log(white);
    console.log(result);
    for (let i = k - 1; i >= 0; i--) {
        result.splice(white[i], 1);
        console.log(white[i]);
        console.log(result);
    }
    return result;
}

//console.log(wave("hello"));
//console.log(wave("hello there"));
console.log(wave(" gap "));


'Hello,hEllo,heLlo,helLo,hellO'
'Hello,hEllo,heLlo,helLo,hellO'