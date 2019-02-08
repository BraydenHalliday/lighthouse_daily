var words = ["ground", "control", "to", "major", "tom"];

let nmap = function (words, cb) {
 let arr = []
  for(let i = 0; i < words.length; i++) {
    arr.push(cb(words[i]))
  }
  return arr
}



let a = nmap(words, function(word) {
  return word.length;
});

nmap(words, function(word) {
  return word.toUpperCase();
});

nmap(words, function(word) {
  return word.split('').reverse().join('');
});
