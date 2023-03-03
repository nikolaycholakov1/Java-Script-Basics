function printArray(wordsArray, delimeter) {
  let output = "";
  let step = 0;

  while (step < wordsArray.length) {
    output += wordsArray[step] + delimeter;
    step += 1;
  }
  console.log(output.slice(0, -1));
}

printArray(["One", "Two", "Three", "Four", "Five"], "-");
printArray(["How about no?", "I", "will", "not", "do", "it!"], "_");
