function countLetters (input) {
  var cholder = '';
  var holder = '';
  var object = {};
  for(let i = 0; i < input.length; i++) {
    cholder = input[i];
    for(let j = 0; j < input.length; j++) {
      if (cholder === input[j]) {
        holder = holder + j + ', ';
      }
    }
    object[cholder] = holder.substr(0, holder.length - 2);
    holder = 0;
    cholder = '';
  }
  console.log(object);
  };
  countLetters("lighthouse in the house");
// took 10 minutes
