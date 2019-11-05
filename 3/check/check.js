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

function changeBgColorSelect() {
    let input = document.getElementById('colorselect').value;
    document.bgColor = input;
    return true;
}

function changeParagraph() {
    document.fgColor = 'blue';
    return true;
}

function loremIpsum() {
    document.getElementById('loremipsum').innerHTML = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
        'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
        'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
        'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
        'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return true;
}

function loremIpsumDelete() {
    document.getElementById('loremipsum').innerHTML = '';
    return true;
}

function gattino(valore) {
    if (valore && document.getElementById('img') === null) {
        let immagine = document.createElement('img');
        immagine.setAttribute('id', 'img');
        immagine.src = 'https://i.ytimg.com/vi/MBtJdkiEhBk/maxresdefault.jpg';
        let sezione = document.getElementById('cat');
        sezione.appendChild(immagine);
    }
    else if (valore === false && document.getElementById('img') !== null) {
        let sezione = document.getElementById('img');
        sezione.remove();
    }
}

function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "tom.json");
    request.send();
}

function callback() {
    let target = document.getElementById('target');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let json = JSON.parse(this.responseText);
    target.value += json.name + '\n';
    target.value += json.job.title + '\n';
    target.value += json.job.languages + '\n';
}

function getInfo2() {
    let request = new XMLHttpRequest();
    request.onload = callback2;
    request.open("GET", "billy.json");
    request.send();
}

function callback2() {
    let target = document.getElementById('anothertarget');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let json = JSON.parse(this.responseText);
    target.value += json.name + '\n';
    target.value += json.job.title + '\n';
    target.value += json.job.fields + '\n';
}

function getInfo3() {
    let request = new XMLHttpRequest();
    request.onload = callback3;
    request.open('GET', 'tom.txt');
    request.send();
    console.log("sono entrato in getInfo3()");
}

function callback3() {
    console.log("sono entrato in callback3()");
    let target = document.getElementById("targettxt");
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let vector = this.responseText.split(',');
    for (let i = 0; i < vector.length; i++) {
        let info = vector[i].split('=');
        target.value += info[1] + '\n';
    }
}

function cancella(){
    let target=document.getElementById('targettxt');
    target.value='';
}