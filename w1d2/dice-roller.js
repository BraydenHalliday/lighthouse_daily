gvar input = process.argv
function rolldice () {
  output = 'Rolled  ' + input[2] + ' dice: ';
  for ( let i  = 0; i < input[2]; i ++) {
   output +=Math.floor((Math.random() * 6) + 1);
   output += ', ';
  }
console.log(output.substr(0, output.length - 2))
}
rolldice();