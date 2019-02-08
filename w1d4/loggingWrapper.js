


var wrapLog = function (callback, name) {
  /* your code here */
//console.log(callback);
//return function(...bray) {
 // callback(...bray)

 return function (...args) {

  callback.apply(null, arguments)
 // func.call(contexe, arglist)
 // var myArgs = Array.prototype.slice.call(arguments)
  console.log(name + '(' + args.join(', ') + ') => ' + callback.apply(null, arguments))
}
// console.log(name +)
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume") ;

// easier solution
/*function logVolume (a, b, c) {
let hold = 1
hold *= a
hold *= b
hold *= c
console.log('volume(' + a + ', ' + b + ", " + c + ') => ' + hold)

}*/

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24