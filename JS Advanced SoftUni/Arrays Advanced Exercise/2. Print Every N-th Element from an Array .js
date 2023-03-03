function nThElement(arrayOfStrings, step) {
  let output = [arrayOfStrings[0]];
  let currentStep = 0;

  for (let i = 0; i < arrayOfStrings.length; i++) {
    currentStep += step;
    if (currentStep >= arrayOfStrings.length) {
      break;
    }
    output.push(arrayOfStrings[currentStep]);
  }
  console.log(output.join("\n"));
}

nThElement(["5", "20", "31", "4", "20"], 2);
// nThElement(["dsa", "asd", "test", "tset"], 2);
// nThElement(["1", "2", "3", "4", "5"], 6);
