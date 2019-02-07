// part one
/*
let arr = [10, 2, 5, 1, 9]
arr.sort(function(a,b) {
  return a - b
})
console.log(arr)
*/
// take in student names
//sort alphabeticaly
// if names are the same sort by age giving priority to oldest person
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  if (a.name === b.name) {
    if(a.age < b.age) {
      return 1;
    }
  }
  return 0;
});
console.log(students);