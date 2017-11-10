/**
 * @copyright Qianqian Li, 2017
 * @file object.js
 */

var myObj = {};
myObj[true] = 3;
myObj[myObj] = 'baz';

// console.log(myObj);

console.log(myObj['true']); // 3
console.log(myObj['[object Object]']); // baz

console.log('-------------------------------');

var prefix = 'foo';
var obj = {
  [prefix + 'bar']: 'bar',
  [prefix + 'baz']: 'baz'
};

console.log(obj['foobar']); // bar
console.log(obj.foobaz); // baz

console.log('-------------------------------');

function anotherFunction() { /*..*/ }

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject,	// reference, not a copy!
	c: anotherArray,	// another reference!
	d: anotherFunction
};

anotherArray.push( anotherObject, myObject );

var newObj = Object.assign({}, myObject);

console.log(newObj.a); // 2
console.log(newObj.b === anotherObject); // true
console.log(newObj.c === anotherArray); // true
console.log(newObj.d === anotherFunction); //true

console.log('-------------------------------');

var anObj = {
  get a() {
   return this._a_;
 },
 set a(val) {
   this._a_ = val * 2;
 }
}; 
anObj.a = 4;
console.log(anObj.a); // 8

// 'in' to check if a key is in an Object
console.log(3 in [1, 2, 3]); // false




