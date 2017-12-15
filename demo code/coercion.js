/**
 * @copyright Qianqian Li, 2017
 * @file coercion.js
 */

var a = '3e4';
console.log(Number(a)); // 3000

console.log(JSON.stringify("42")); // ""42"" in Chrome

var b = 34;
console.log(b.toString()); // "34"

console.log('---------------------------------');

a = {
  valueOf: function() {
    return '42';
  }
};

b = {
  toString: function() {
    return '42';
  }
};

var c = [4, 2];
c.toString = function(){
  return this.join('');
};

console.log(Number(a)); // 42
console.log(Number(b)); // 42
console.log(Number(c)); // 42
console.log(Number('')); // 0
console.log(Number([])); // 0
console.log(Number(['asd'])); // NaN


console.log('---------------------------------');


a = new Boolean(false);
b = new Number(0);
c = new String('');
console.log(a && b && c); // [String: '']
var d = Boolean(a && b && c);
console.log(d); // true

// falsy list
/*
false
0
""
NaN
undefined
null
*/

a = '3.17';
b = +a;
console.log(b, typeof b); // 3.17 'number'
c = 5 + +a;
console.log(c, typeof c); // 8.17 'number'

console.log('---------------------------------');


console.log(~42); // -(42+1) ==> -43

b = '42px65';
c = Number(b);
d = parseInt(b);
console.log(c, d); // NaN 42

console.log('---------------------------------');


a = ['a'];
b = ['a'];
console.log(a == b); // false

a = '42';
b = true;
console.log(a == b); // false

a = [42];
b = 42;
console.log(a == b); // true













