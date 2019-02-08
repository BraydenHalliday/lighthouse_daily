//no help or google attempt

var wrapLog = function (callback, name) {
  /* your code here */
  //create a function that takes in the call back math function and return answer
 return function (...args) {
console.log(name + '(' + args.join(', ') + ') => ' +  callback(...args));
  }
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

var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

var cashmoney = function (q,w,e,r,t,y,u,i,o,) {
  return q * w * e * r * t * y * u * i * o;
}

var logcashmoney = wrapLog(cashmoney, "cashmoney")
logcashmoney(1,2,3,4,5,6,7,8,9);

//atempt with help


/*
var wrapLog = function (callback, name) {
  /* your code here */
//console.log(callback);
//return function(...bray) {
 // callback(...bray)
/*
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

// joke solution
/*function logVolume (a, b, c) {
let hold = 1
hold *= a
hold *= b
hold *= c
console.log('volume(' + a + ', ' + b + ", " + c + ') => ' + hold)

}*/
/*
logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
*/