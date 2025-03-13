// Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

function stampaOgniSecondo(messaggio) {
    const interval = setInterval(function () {
        console.log(messaggio);
    }, 1000);
    setTimeout(function () {
        clearInterval(interval);
        console.log("Loop interrotto");
    }, 10000);
}

stampaOgniSecondo("Ciao");