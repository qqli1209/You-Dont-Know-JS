/**
 * @copyright Qianqian Li, 2017
 * @file grammar.js
 */


function foo({a, b, c}) {
  console.log(a, b, c);
}
foo({
  b: [1, 2],
  c: 'str',
  a: 42
}); // 42 [ 1, 2 ] 'str'


var a = 10;

switch (a) {
	case 1:
	case 2:
		// never gets here
	default:
		console.log( "default" );
	case 3:
		console.log( "3" );
		break;
	case 4:
		console.log( "4" );
}
// default 3
















