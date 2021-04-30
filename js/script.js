// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.

// 1. chiedi all'utente il cognome
// var cognomeUtente = prompt("Scrivi il tuo cognome");
// console.log("Cognome inserito: " + cognomeUtente);

var cognomeUtente = prompt("Scrivi il tuo cognome");

while ((!/^[a-zA-Z ]+$/.test(cognomeUtente))) {
    cognomeUtente = prompt("!ERRORE! - Scrivi il tuo cognome");
}

console.log("Cognome inserito: " + cognomeUtente);

// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var cognomiArray = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
console.log("Array di partenza: " + cognomiArray);


// push
cognomiArray.push(cognomeUtente);
console.log("Array con push: " + cognomiArray);


// 3. stampa la lista ordinata alfabeticamente
cognomiArray.sort();
console.log("Arry in ordine alfabetico: " + cognomiArray);


// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
console.log("Array Ordinato Numericamente:")

for (i = 0 ; i < cognomiArray.length ; i++) {

    console.log((i + 1) + " " + cognomiArray[i]);

    /* soluzione SENZA lista ordinata
    document.getElementById("lista_cognomi").innerHTML += "<li>" + (i + 1) + " " + cognomiArray[i] + "</li>"; */

    /* soluzione  CON lista ordinata */
    document.getElementById("lista_cognomi").innerHTML += "<li>" + cognomiArray[i] + "</li>";

}
