/**
 * Anonyme Funktionen
 */

// Deklaration benannte Funktion
function printFoo() {
  console.log('foo');
}

// Deklaration anonyme Funktion
let printBar = function () {
  console.log('bar');
};

// Aufruf
printFoo();
printBar();

/**
 * Arrow Functions - Pfeilfunktionen
 */

// normale anonyme Methode
let print1 = function () {
  console.log('Unveränderlicher Text');
};

// Arrow Function
let print2 = () => {
  console.log('feste Ausgabe');
};

// Arrow Function ohne geschweifte Klammern (geht wahrscheinlich bei einer einzigen Anweisung)
let print3 = () => console.log('noch kürzer');

print1();
print2();
print3();

let print4 = (a, b) => a + b;
console.log(print4(3, 5));

let func5 = () => 'fester Text als Rückgabe';
console.log(func5());

let func6 = () => {
  return 'Mit geschweiften Klammern braucht man ein return';
};
console.log(func6());
