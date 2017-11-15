/**
 * @copyright Qianqian Li, 2017
 * @file delegation.js
 */


var Task = {
  setID: function(ID) {
    this.id = ID;
  },
  outputID: function() {
    console.log(this.id);
  }
};

var XYZ = Object.create(Task);
XYZ.prepareTask = function(ID, label) {
  this.setID(ID);
  this.label = label;
};
XYZ.outputTaskDetails = function() {
  this.outputID();
  console.log(this.label);
};

var xyz = Object.create(XYZ);
xyz.prepareTask(18, 'Qianqian');
xyz.outputTaskDetails();
console.log(xyz); // { id: 18, label: 'Qianqian' }















