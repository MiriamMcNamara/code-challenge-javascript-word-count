//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export (add this back in when testing/submitting)
const countWords = (str) => {
  //declare a regex variable
  let regexp = /[\w']+/gim;
  //declare an object to return (pretty sure that's what the return wants based on test returns)
  let wordCount = {};
  console.log(wordCount);

  //declare a variable for the regex situation
  let matchAll = str.match(regexp);

  //loop through the array and show all the matches
  for (match in matchAll) {
    console.log("match:", matchAll[match]);
    //okay this we can work with!
    //declare variable for my brain
    let word = matchAll[match];
    //how to compare it to wordCount? loop within loop too complicated
    //if it doesn't exist it returns undefined
    console.log(wordCount[word]);
    //if there is no wordCount[word], declare it as a property with value of 1
    if (wordCount[word] === undefined) {
      wordCount[word] = 1;
      //otherwise, increment
    } else {
      wordCount[word]++;
    }

    console.log(wordCount);
  }
};

countWords(
  "1,000 rainbows are better and are more prettier than 999 rainbows..."
);
