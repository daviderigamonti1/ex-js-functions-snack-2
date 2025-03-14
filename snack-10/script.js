// Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.
// Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.

function creaThrottler(funzione, tempoLimite) {
    let ultimaEsecuzione = 0;
    return function (...args) {
        const ora = Date.now();
        if (ora - ultimaEsecuzione >= tempoLimite) {
            ultimaEsecuzione = ora;
            funzione(...args)
        } else {
            console.log("Non eseguito");
        }
    }
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog();
throttledLog();
setTimeout(throttledLog, 2500);