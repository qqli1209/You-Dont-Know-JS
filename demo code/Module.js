/**
 * @copyright Qianqian Li, 2017
 */

function coolModule(id) {
  var sth = 'cool';
  var another = [1, 2, 3];
  function change() {
    publicAPI.logId = logUpperId;
  }
  function doSth() {
    console.log(sth);
  }
  function doAnother() {
    console.log(another.join('.'));
  }
  function logId() {
    console.log(id);
  }
  function logUpperId() {
    console.log(id.toUpperCase());
  }

  var publicAPI = {
    change: change,
    doSth: doSth,
    doAnother: doAnother,
    logId: logId
  };

  return publicAPI;
}

var test = coolModule('#abc');
test.doSth(); // cool
test.doAnother(); // 1.2.3
test.logId(); // #abc
test.change();
test.logId(); // #ABC
