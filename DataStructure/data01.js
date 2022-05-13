/**
 * Arrays
 * - Deklaration
 * - Initialisierung
 * - Zuweisung, Zugriff
 */

let A1 = function () {
  // Array Deklaration
  let a1 = [];
  console.log('Type: ' + typeof a1);
  console.log('Länge von a1: ' + a1.length);
  console.log('Array a1: ' + a1);

  // Zuweisung
  a1[0] = '4711';
  a1[1] = '4712';
  a1[2] = true;
  a1[3] = 'Text 01';
  a1[4] =
    'aäb cde fgh ijk lmn oöp qrsß tuü vwx yz AÄBC DEF GHI JKL MNO ÖPQ RST UÜV WXYZ !"§ $%& /() =?* \'<> #|; ²³~ @`´ ©«» ¼× {}';

  // Zugriff
  console.log('Länge von a1: ' + a1.length);
  for (let idx = 0; idx < a1.length; idx++) {
    console.log('Element ' + (idx + 1) + ': ' + a1[idx]);
  }

  // Initialisierung
};

let A2 = function () {
  // Assoziative Array

  // Deklaration
  let a1 = {};
  console.log('Type: ' + typeof a1);
  console.log('Länge A2: ' + a1.length);
  console.log('Array A2: ' + a1);

  // Zuweisung
  a1['foo'] = 4711;
  a1['bar'] = true;
  a1[7] = 'Text';

  console.log('Type: ' + typeof a1);
  console.log('Länge A2: ' + a1.length);
  console.log(a1);

  // Zugriff

  // Initialisierung
};

let A3 = function () {
  let a1 = { Harry: 123, Sally: 456, Betty: 789 };

  console.log(a1);
};

function main() {
  A1();
  A2();
  A3();
}

main();
