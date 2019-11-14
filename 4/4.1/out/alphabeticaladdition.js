function addLetters(...letters) {
    if (letters.length == 0 || (letters.length == 1 && letters[0] == 'z')) {
        return 'z';
    }
    let num = 0;
    for (let i = 0; i < letters.length; i++) {
        num += letters[i].charCodeAt(0) - 96;
        console.log(letters[i].charCodeAt(0) - 96);
    }
    console.log((num % 26) + 96);
    if ((num % 26) === 0) {
        return 'z';
    }
    return String.fromCharCode((num % 26) + 96);
}
//console.log(addLetters('a', 'b', 'c', 'd'));
console.log(addLetters("i", "u", "j", "y", "m"));
console.log(addLetters('a', 'z'));
//# sourceMappingURL=alphabeticaladdition.js.map