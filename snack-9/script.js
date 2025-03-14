// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.
// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.

function sequenzaOperazioni(arrayOperazioni, intervallo) {
    for (let i = 0; i < arrayOperazioni.length; i++) {
        setTimeout(function () {
            arrayOperazioni[i]();
        }, i * intervallo)
    }
}

const operazioni = [
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3"),
    () => console.log("Operazione 4"),
    () => console.log("Operazione 5"),
];

sequenzaOperazioni(operazioni, 1000);