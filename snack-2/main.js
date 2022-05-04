const firstWord = prompt("inserisci una parola");
const secondWord = prompt("inserisci la seconda parola");

if ( firstWord.length < secondWord.length) {
    console.log(firstWord + ' ' + secondWord)
} else if (firstWord.length == secondWord.length) {
    console.log("sono uguali")
} else {
    console.log(secondWord + ' ' + firstWord)
}