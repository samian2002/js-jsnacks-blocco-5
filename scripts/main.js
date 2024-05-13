/* Zucchine 1

const zucchine = [
    { varietà: "Zucchina1", peso: 150, lunghezza: 15 },
    { varietà: "Zucchina2", peso: 180, lunghezza: 18 },
    { varietà: "Zucchina3", peso: 200, lunghezza: 20 },
    { varietà: "Zucchina4", peso: 170, lunghezza: 16 },
    { varietà: "Zucchina5", peso: 190, lunghezza: 19 },
    { varietà: "Zucchina6", peso: 160, lunghezza: 17 },
    { varietà: "Zucchina7", peso: 140, lunghezza: 14 },
    { varietà: "Zucchina8", peso: 150, lunghezza: 15 },
    { varietà: "Zucchina9", peso: 130, lunghezza: 13 },
    { varietà: "Zucchina10", peso: 120, lunghezza: 12 }
];

// Calcolo del peso totale delle zucchine
let pesoTotale = 0;

// Uso del ciclo
for (let i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i].peso;
}

console.log("Il peso totale delle zucchine è:", pesoTotale, "grammi");
*/




// Array di oggetti zucchine
const zucchine = [
    { varietà: "Zucchina1", peso: 150, lunghezza: 15 },
    { varietà: "Zucchina2", peso: 180, lunghezza: 18 },
    { varietà: "Zucchina3", peso: 200, lunghezza: 20 },
    { varietà: "Zucchina4", peso: 170, lunghezza: 16 },
    { varietà: "Zucchina5", peso: 190, lunghezza: 19 },
    { varietà: "Zucchina6", peso: 160, lunghezza: 17 },
    { varietà: "Zucchina7", peso: 140, lunghezza: 14 },
    { varietà: "Zucchina8", peso: 150, lunghezza: 15 },
    { varietà: "Zucchina9", peso: 130, lunghezza: 13 },
    { varietà: "Zucchina10", peso: 120, lunghezza: 12 }
];
/*
// Divisione delle zucchine in base alla lunghezza
const zucchineCorte = [];
const zucchineLunghe = [];

for (let i = 0; i < zucchine.length; i++) {
    if (zucchine[i].lunghezza < 15) {
        zucchineCorte.push(zucchine[i]);
    } else {
        zucchineLunghe.push(zucchine[i]);
    }
}

// Cicli che calcolano il totale dei due gruppi
let pesoTotaleCorte = 0;
let pesoTotaleLunghe = 0;

for (let i = 0; i < zucchineCorte.length; i++) {
    pesoTotaleCorte += zucchineCorte[i].peso;
}

for (let i = 0; i < zucchineLunghe.length; i++) {
    pesoTotaleLunghe += zucchineLunghe[i].peso;
}

console.log("Il peso totale delle zucchine corte è:", pesoTotaleCorte, "grammi");
console.log("Il peso totale delle zucchine lunghe è:", pesoTotaleLunghe, "grammi");

// "Manipolo" il DOM usando innerHTML
document.getElementById('pesoCorte').innerHTML = "Peso zucchine corte: " + pesoTotaleCorte + " grammi";
document.getElementById('pesoLunghe').innerHTML = "Peso zucchine lunghe: " + pesoTotaleLunghe + " grammi";
*/
/*
function calcolaPesoZucchine() {
    const zucchineCorte = [];
    const zucchineLunghe = [];

    for (let i = 0; i < zucchine.length; i++) {
        if (zucchine[i].lunghezza < 15) {
            zucchineCorte.push(zucchine[i]);
        } else {
            zucchineLunghe.push(zucchine[i]);
        }
    }

    let pesoTotaleCorte = 0;
    let pesoTotaleLunghe = 0;

    for (let i = 0; i < zucchineCorte.length; i++) {
        pesoTotaleCorte += zucchineCorte[i].peso;
    }

    for (let i = 0; i < zucchineLunghe.length; i++) {
        pesoTotaleLunghe += zucchineLunghe[i].peso;
    }

    console.log("Il peso totale delle zucchine corte è:", pesoTotaleCorte, "grammi");
    console.log("Il peso totale delle zucchine lunghe è:", pesoTotaleLunghe, "grammi");

    document.getElementById('pesoCorte').innerHTML = "Peso zucchine corte: " + pesoTotaleCorte + " grammi";
    document.getElementById('pesoLunghe').innerHTML = "Peso zucchine lunghe: " + pesoTotaleLunghe + " grammi";
}

// Richiamo la funzione
calcolaPesoZucchine()
*/

//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

const reverseString = str => str.split('').reverse().join('');

// Esempio di utilizzo della funzione
console.log(reverseString("Boolean")); // Output: oaiC



