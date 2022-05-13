/**
 * Arrays
 * - Deklaration
 * - Initialisierung
 * - Zuweisung, Zugriff
 */

function A1() {
  // Array Deklaration
  a1 = [];
  console.log('Array a1: ' + a1);
  console.log('Länge von a1: ' + a1.length);

  // Zuweisung
  a1[0] = '4711';
  a1[1] = '4712';
  a1[2] = true;
  a1[3] = 'Text 01';
  a1[4] =
    'aäb cde fgh ijk lmn oöp qrsß tuü vwx yz AÄBC DEF GHI JKL MNO ÖPQ RST UÜV WXYZ !"§ $%& /() =?* \'<> #|; ²³~ @`´ ©«» ¼× {}';

  // Zugriff
}

function A2() {}

function main() {
  A1();
}

main();
