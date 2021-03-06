// The second argument/parameter is expected to be a function
/*function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {

  console.log('found at index', index);
}
*/
//findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function (x, index) {
    if (x === "Waldo") { found(index);
    }
  } );
}

function actionWhenFound(index) {

  console.log('found at index', index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);