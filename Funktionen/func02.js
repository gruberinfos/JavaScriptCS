/**
 * Parameter
 * - Optionale Parameter
 * - variable Parameterzahl
 */

/**
 * Ein Parameter, der beim Aufruf nicht verwendet wird, ist undefined
 */

function printA(t1, t2) {
  console.log('t1: ' + t1);

  if (t2 != undefined) {
    console.log('z2: ' + t2);
  }
}

printA('foo');
console.log();

printA('foo', 'bar');
console.log();

printA('foo', 'bar', 'baz');
console.log();

/**
 * Die Parameter des Aufrufes, sind immer in der Variablen arguments vorhanden.
 * Auch wenn die Funktion diese Parameter gar nicht hat.
 */
function printB() {
  let text = '';

  for (let i = 0; i < arguments.length; i++) {
    let elem = arguments[i].padEnd(4, '.');
    text += elem;
  }

  console.log(text);
}

printB('foo');
console.log();

printB('foo', 'bar');
console.log();

printB('foo', 'bar', 'baz');
console.log();
