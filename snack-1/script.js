// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.

function somma(a, b) {
    return a + b
}

console.log(somma);

// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile.

const sommaAnonima = function (a, b) {
    return a + b
}

console.log(sommaAnonima);

// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

const arrowSomma = (a, b) => a + b;

console.log(arrowSomma);