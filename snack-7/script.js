// Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.

function eseguiEFerma(messaggio, tempoAvvio, tempoStop) {
    const esegui = setInterval(function () {
        console.log(messaggio);
    }, tempoAvvio);
    setTimeout(function () {
        clearInterval(esegui);
        console.log("Stop");
    }, tempoStop);
}

eseguiEFerma("Ciao", 1000, 10000);