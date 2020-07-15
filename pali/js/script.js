// Chiediamo all'utente d'inserire una parola o una frase
var parola = prompt ("inserisci una parola o una frase");

// invertiamo la parola con la funzione invertiString
var alorap = invertiStringa (parola);

// confrontiamo le parole con la funzione confronta
var palindromi = confronta (parola, alorap);


// Stampiamo
if (palindromi) {
    document.getElementById('risultato').innerHTML= "La parola da te inserita è palindroma";
} else {
    document.getElementById('risultato').innerHTML= "La parola da te inserita non è palindroma";
}


// la funzione "invertiStringa" inverte il dato inserito dall'utente e crea una nuova stringa
function invertiStringa (str) {
    var rts='';
    for (var i = str.length -1; i >= 0; i--) {
        rts += str[i];
    }
    return rts;
}

// la funzione "confronta" prima normalizza il dato togliendo eventuali maiuscole e poi confronta, se uguali ritorna TRUE
function confronta (a, b) {
    var confronto = true;
    if (a.toLowerCase() != b.toLowerCase()) {
        confronto = false;
    }
    return confronto;
}
