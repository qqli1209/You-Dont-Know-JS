/**
 * @copyright Qianqian Li, 2017
 * @file priority.js
 */

// explicit binding > implicit binding
function foo() {
  console.log(this.a);
}

var obj1 = {
  a: 2,
  foo: foo
};

var obj2 = {
  a: 3,
  foo: foo
};

obj1.foo.call(obj2); // 3
obj2.foo.call(obj1); // 2
console.log('--------------------------');

// new binding > implicit binding
function too(sth) {
  this.a = sth;
}

var obj3 = {
  too: too
};

var obj4 = {};

obj3.too(2);
console.log(obj3.a); // 2

obj3.too.call(obj4, 3);
console.log(obj4.a); // 3

var bar = new obj3.too(4);
console.log(obj3.a); // 2
console.log(bar.a); // 4

// arrow function
function test() {
  return (a) => {
    console.log(this.a);
  };
}

console.log('----------------------------');
var t = test.call(obj1);
t.call(obj2); // 2, not 3
