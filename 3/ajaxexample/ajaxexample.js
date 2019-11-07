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
    let json = JSON.parse(this.responseText);
    target.value = json.nome;

    //let targetjob = document.getElementById("lavoro");
    document.getElementById("lavoro").value = json.lavoro.titolo;

    let vectorling = Object.values(json.lavoro.linguaggi);
    for (let i in vectorling) {
        if (vectorling[i] === document.getElementById(vectorling[i]).id) {
            document.getElementById(vectorling[i]).checked = true;
        }
    }
}