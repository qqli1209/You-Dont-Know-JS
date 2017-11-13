/**
 * @copyright Qianqian Li, 2017
 * @file mixin.js
 */

function mixin(sourceObj, targetObj) {
  for(var key in sourceObj) {
    if(!(key in targetObj)) {
      targetObj[key] = sourceObj[key];
    }
  }
  return targetObj;
}

var Vehicle = {
  engines: 1,
  ignition: function() {
    console.log('Turning on my engine.');
  },
  drive: function() {
    this.ignition();
    console.log('Steering and moving forward!');
  }
};

var Car = mixin(Vehicle, {
  wheels: 4,
  drive: function() {
    Vehicle.drive.call(this);
    console.log('Rolling on all ' + this.wheels + ' wheels!');
  }
});


Car.drive();

console.log('----------------------------');


var Something = {
	cool: function() {
		this.greeting = "Hello World";
		this.count = this.count ? this.count + 1 : 1;
	}
};
Something.cool();

console.log(Something); // { cool: [Function: cool], greeting: 'Hello World', count: 1 }
console.log(Something.greeting); // "Hello World"
console.log(Something.count); // 1

var Another = {
	cool: function() {
		// implicit mixin of `Something` to `Another`
		Something.cool.call( this );
	}
};
Another.cool();
console.log(Another.greeting); // "Hello World"
console.log(Another.count); // 1 (not shared state with `Something`)




