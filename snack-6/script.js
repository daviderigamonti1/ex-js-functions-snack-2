// Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.

function creaContatoreAutomatico(interval) {
    let contatore = 0;
    return function () {
        setInterval(function () {
            contatore++;
            console.log(contatore);
        }, interval);
    }
}

const contatoreAutomatico = creaContatoreAutomatico(3000);
contatoreAutomatico();