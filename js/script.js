// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.

// 1. chiedi all'utente il cognome
var cognomeUtente = prompt("Scrivi il tuo cognome");
console.log(cognomeUtente);


// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
var cognomiArray = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]
console.log(cognomiArray);

// push
cognomiArray.push(cognomeUtente);


// 3. stampa la lista ordinata alfabeticamente
cognomiArray.sort();
console.log(cognomiArray);



// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (i=1 ; i<cognomiArray.length ; i++) {

    console.log(i + " " + cognomiArray[i]);

}