/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

function whatToDoForLunch(hungry, availableTime) {
  let prefix =  'Im hungry';

  if (!hungry) {
    prefix = 'Im not hungry';
    return `${prefix}, No need to eat.`;
  }

  if (availableTime <= 20) {
    return prefix + ' I should pick something up and eat in back in the Lab.';
  }

  if (availableTime > 20 && availableTime <= 30) {
    return prefix + ' I should try a place in Gastown.';
  }

  return prefix + ' I should probably reconsider your amount of breaks.';

};


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log(whatToDoForLunch(false, 20));
console.log(whatToDoForLunch(true, 20));
console.log(whatToDoForLunch(true, 25));
console.log(whatToDoForLunch(true, 35));


