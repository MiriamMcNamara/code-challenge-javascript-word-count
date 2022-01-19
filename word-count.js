export const countWords = (str) => {
  //declare a regex variable to capture words from the string
  let regexp = /[\w']+/gim;
  //declare an object to return
  let wordCount = {};

  //declare a variable for the regex situation
  let matchAll = str.match(regexp);

  //loop through the array and show all the matches
  for (let i = 0; i < matchAll.length; i++) {
    //declare variable for each word, control case
    let word = matchAll[i].toLowerCase();
    console.log("word:", word);
    //remove any unwanted single quotes included by the regex
    if (word.charAt(0) === "'") {
      word = word.replace(word.charAt(0), "");
    }
    if (word.charAt(word.length - 1) === "'") {
      word = word.replace(word.charAt(word.length - 1), "");
    }
    //if there is no wordCount[word] (undefined), declare it as a property with value of 1
    if (wordCount[word] === undefined) {
      wordCount[word] = 1;
      //otherwise, increment
    } else {
      wordCount[word]++;
    }
  }
  return wordCount;
};
