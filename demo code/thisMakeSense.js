/**
 * @copyright Qianqian Li, 2017
 * @file thisMakeSense.js
 */


function foo() {
  console.log(this.a);
}

var a = 2;
foo(); // undefined, 'undefined error' in strict mode


var obj = {
  a: 3,
  foo: foo
};

obj.foo(); // 3
var b = obj.foo;
b(); // undefined

function doFoo(fn) {
  fn();
}

doFoo(foo); // undefined

console.log('-----------------------------');

foo.call(obj); // 3

function test(something) {
  console.log(this.a, something);
  return this.a + something;
}
var bar = test.bind(obj);
var bb = bar(6); // 3 6
console.log(bb); // 9
