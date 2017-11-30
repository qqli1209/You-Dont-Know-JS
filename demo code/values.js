/**
 * @copyright Qianqian Li, 2017
 * @file types.js
 */

var a = [];
a["3"] = 5;
console.log(a.length); // 4
console.log(a[3]); // 5

console.log('--------------------------------');


var b = "foo";
console.log(b[0]); // f
console.log(b.charAt(0)); // f

console.log('--------------------------------');


var c = Array.prototype.join.call(b, '-');
var d = Array.prototype.map.call(b, (v) => {
  return v.toUpperCase() + '.'
}).join('');

console.log(c); // f-o-o
console.log(d); // F.O.O


console.log('--------------------------------');

a = ['f', 'o', 'o'];
a.push('!');

console.log(a.reverse()); // [ '!', 'o', 'o', 'f' ]
console.log(a); // [ '!', 'o', 'o', 'f' ]

console.log('--------------------------------');


var  f = 2 / 'foo';
console.log(f, typeof f); // NaN number
var g = 'foo';

if(!Number.isNaN) {
  Number.isNaN = function(n){
    return typeof(n) === 'number' && isNaN(n);
  };
}

console.log(isNaN(f), isNaN(g)); // true true
console.log(Number.isNaN(f), Number.isNaN(g)); // true false

console.log('--------------------------------');


console.log(1/Infinity); // 0
console.log(-1/Infinity); // -0


function append(x) {
  x.push(6);
}

function change(x) {
  x= [4, 4, 4];
}

var test1 = [1, 2, 3];
var test2 = [1, 2, 3];

append(test1);
change(test2);

console.log(test1); // [ 1, 2, 3, 6 ]
console.log(test2); // [ 1, 2, 3 ], not [4, 4, 4]

function add(x) {
  x = x + 1;
}

var t = 1;
add(t);
console.log(t); // 1





