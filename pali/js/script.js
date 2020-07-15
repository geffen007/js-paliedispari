// Chiediamo all'utente d'inserire una parola o una frase
var parola = prompt ("inserisci una parola o una frase");

// invertiamo la parola con la funzione invertiString
var alorap = invertiStringa (parola);

// confrontiamo le parole con la funzione confronta
var palindromi = confronta (parola, alorap);

console.log(parola);
console.log(alorap);
console.log(palindromi);

// la funzione invertiStringa inverte il dato inserito dall'utente e crea una nuova stringa
function invertiStringa (str) {
    var rts='';
    for (var i = str.length -1; i >= 0; i--) {
        rts += str[i];
    }
    return rts;
}

// la funzione confronta prima normalizza il dato togliendo eventuali maiuscole e poi confronta, se uguali ritorna TRUE
function confronta (a, b) {
    var confronto = true;
    if (a.toLowerCase() != b.toLowerCase()) {
        confronto = false;
    }
    return confronto;
}
