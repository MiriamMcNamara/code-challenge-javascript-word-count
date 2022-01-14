//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export (add this back in when testing/submitting)
const countWords = (str) => {
  //declare a regex variable
  let regexp = /[\w']+/gim;

  //declare a variable for the regex situation
  let matchAll = str.matchAll(regexp);

  //show what returns, a big nasty object we need to turn into an array
  console.log(matchAll);
  //make it into an array
  matchAll = Array.from(matchAll);

  //loop through the array and show all the matches
  for (match in matchAll) {
    console.log(matchAll[match]);
    //okay this we can work with!
  }
};

countWords("hello, world!");
