/**
 * @copyright Qianqian Li, 2017
 * @file natives.js
 */


var a = new String('asd');
console.log(typeof a, a); // object [String: 'asd']
console.log(a instanceof String); // true
console.log(Object.prototype.toString.call(a)); // [object String]
console.log(String.prototype.toString.call(a)); // asd


console.log('------------------------------------');

var b = new Boolean(false);
console.log(b); // [Boolean: false]

if(!b) {
  console.log('output'); // never runs
}

// get the primitive value of b
if(!b.valueOf()) {
  console.log('output'); // output
}


console.log('------------------------------------');

console.log(Date.now());
var d = new Date();
console.log(d);


















