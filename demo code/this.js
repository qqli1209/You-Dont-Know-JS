/**
 * @copyright Qianqian Li, 2017
 * @file this.js
 */

function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = 'hello, I am ' + identify.call(this);
  return greeting;
}

var me = {
  name: 'Qianqian'
};

var you = {
  name: 'Binbin'
};

console.log(identify.call(me));
console.log(identify.call(you));

console.log(speak.call(me));
console.log(speak.call(you));


console.log('----------------------------');

function foo(num) {
  console.log('foo: ' + num);
  this.count++;
}
foo.count = 0;

for(var i = 0; i < 5; i++) {
  foo(i);
}
console.log(foo.count); // 0
console.log(count); // NaN

for(var i = 5; i < 10; i++) {
  foo.call(foo, i); // using 'call', we ensure 'this' to point at the function object itself
}
console.log(foo.count); // 5

console.log('----------------------------');

function foo1() {
  var a = 2;
  bar();
}

function bar() {
  console.log(this.a);
}
var a = 8;
foo1();