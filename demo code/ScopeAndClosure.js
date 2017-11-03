/**
 * @copyright Qianqian Li, 2017
 */

function foo() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  bar();
}

foo(); // 2

function foo1() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  return bar;
}

var baz1 = foo1();
baz1(); // 2
/* use closure as the return value of a function, who can remember and access its lexical scope
 even when it's outside its lexical scope
 */


function foo2() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  baz2(bar);
}

function baz2(fn) {
  fn();
}

foo2(); // 2



var fn3;
function foo3() {
  var a = 2;
  function bar() {
    console.log(a);
  }
  fn3 = bar;
}

function baz3() {
  fn3();
}

foo3();
baz3(); // 2


function waitLog(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 100);
}

waitLog('hello, closure'); // hello, closure

console.log('----------------------');
for(var i = 0; i < 5; i++) {
  setTimeout(function timer(){
    console.log(i); // 5 5 5 5 5 
  }, 10);
}

for(let i = 0; i < 5; i++) {
  setTimeout(function timer(){
    console.log(i); // 0 1 2 3 4 
  }, 10);
}

for(var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function timer() {
      console.log(i)
    }, 300);
  })(i);
}

