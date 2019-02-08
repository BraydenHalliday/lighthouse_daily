var countdownGenerator = function (x) {
  /* your code here */
    if(x === 3) {
      console.log('T-minus 3...')
      x --;
    }
    if(x === 2) {
      console.log('T-minus 2...')
      x --;
    }
    if(x === 1) {
      console.log('T-minus 1...')
      x --;
    }
    if(x === 0) {
      console.log('Blast Off!')
      x --;
    }
    if(x < 0) {
      console.log('Rockets already gone, bub!')

    }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!