function check() {
    let input = document.getElementById('x').value;
    /*for (let i = 0; i < input.length-1; i++)
        if (input.substring(i,i+1)===' '){
            return true;
        }
        alert('Attenzione! Inserire nome e cognome');
        return false;
        */
    if (input.indexOf(' ') === -1) {
        alert('Attenzione! Inserire nome e cognome');
        return false;
    }
    return true;
}

function changeBgColor() {
    let input = document.getElementById('color').value;
    if (input === 'red' || input === 'green' || input === 'yellow' || input === 'blue' || input === 'black' || input === 'white' ||
        input === 'grey' || input === 'orange' || input === 'pink') {
        document.bgColor = input;
        return true;
    }
    alert('Attenzione! Inserire un colore valido');
    return false;
}