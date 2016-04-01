'use strict';

function removeElementAll(array, element) {
  var i;
  for (i = 0; i < array.length; i++) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
  }

  return array;
}

module.exports = removeElementAll;
