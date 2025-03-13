// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.

function contoAllaRovescia(n) {
    let partenza = n;
    const interval = setInterval(function () {
        console.log(partenza);
        partenza--;
    }, 1000);
    setTimeout(function () {
        console.log("Tempo scaduto!")
        clearInterval(interval);
    }, (n + 1) * 1000)
}

contoAllaRovescia(10);