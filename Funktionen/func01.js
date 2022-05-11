/**
 * Funktion ohne Parameter
 */

// Deklaration
function printImmutableText() {
  console.log('Es wird immer dieser Text ausgegeben.');
}

// Aufruf
printImmutableText();

/**
 * Funktion mit Parameter
 */

// Deklaration
function printText(text) {
  console.log(text);
}

// Aufruf
printText('Diese Nachricht wird ausgegeben.');

/**
 * Funktion mit Rückgabe und Parameter
 */

//Deklaration
function addNumbers(a, b) {
  return a + b;
}

// Aufruf
printText(addNumbers(3, 5));
