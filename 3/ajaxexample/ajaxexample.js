function autofill() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "autofill.json");
    request.send();
}

function callback() {
    let target = document.getElementById('nome');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    document.getElementById("nome").value="Nigel";
}