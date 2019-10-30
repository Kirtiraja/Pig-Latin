// BUSINESS LOGIC

function wordFunction(word) {
  const vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  if (vowels.includes(word[0])) {
    return word + "way";
  }
  //   else if (("qu").includes(word[0])) {
  //   console.log("True");
  //   return word.slice(2) + word.slice(0, 2) + "way"; // Not working for every input
  // }
    else {
    let vowelIndex = 0;
    let arrayLetters = word.split("");
    arrayLetters.forEach(function(arrayLetter) {
      if (vowels.includes(arrayLetter[0])) {
        vowelIndex = word.indexOf(arrayLetter);
      };
    });
    return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
  };
}; // This is the end of the function.

function sentenceFunction(string) {
  let arrayWords = string.split(" ");
  let sentencePigLatin = arrayWords.map(function(arrayWord) {
    return wordFunction(arrayWord);
  });
  return sentencePigLatin.join(" "); // First option

  // let arrayWords = string.split(" ");
  // let arr = [];
  // arrayWords.forEach(function(arrayWord) {
  //   arr.push(wordFunction(arrayWord));
  // });
  // return arr.join(" "); // Second option
  //
  // let arrayWords = [];
  // string.split(" ").forEach(function(arrayWord) {
  //   arrayWords.push(wordFunction(arrayWord));
  // });
  // return arr.join(" "); // Third option

}; // This is the end of the function.

//USER LOGIC
$(document).ready(function() {
  $("form#userForm").submit(function(event){
    event.preventDefault();
    let userSentence = $("#userSentence").val();

    let result = sentenceFunction(userSentence);

    $("p#result").text(result);
  });
});

// Try using .split(), .slice(), .indexOf(), .includes()
