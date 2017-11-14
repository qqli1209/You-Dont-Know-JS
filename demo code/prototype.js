/**
 * @copyright Qianqian Li, 2017
 * @file prototype.js
 */


var anotherObj = {
  a: 2,
  b: 3
};

var myObj = Object.create(anotherObj);
console.log(myObj.a); // 2
for(var key in myObj) {
  console.log('found ' + key + ': ' + myObj[key]);
}
console.log(Object.getPrototypeOf(myObj) === anotherObj); // true

console.log('----------------------------------');

myObj.foo = 'bar';
myObj.b = 6;
console.log(myObj.foo); // bar
console.log(anotherObj.foo); // undefined
for(var key in myObj) {
  console.log('found ' + key + ': ' + myObj[key]);
}

console.log('----------------------------------');

console.log(myObj.hasOwnProperty('a')); // false
console.log(anotherObj.hasOwnProperty('a')); // true


myObj.a++;
console.log(myObj.a); // 3
console.log(anotherObj.a); // 2
console.log(myObj.hasOwnProperty('a')); // true
console.log(anotherObj.hasOwnProperty('a')); // true


console.log('----------------------------------');


function Foo() {
  // ...
}
console.log(Foo.prototype); // Foo {}

var test = new Foo();
console.log(Object.getPrototypeOf(test)===Foo.prototype); // true
console.log(Foo.prototype.constructor === Foo); // true
console.log(test.constructor === Foo); // true
console.log(Foo.prototype.isPrototypeOf(test)); // true

console.log('----------------------------------');

function NothingSpecial() {
  console.log('I am nothing special');
}
var aa = new NothingSpecial();
console.log(aa); // NothingSpecial {}

