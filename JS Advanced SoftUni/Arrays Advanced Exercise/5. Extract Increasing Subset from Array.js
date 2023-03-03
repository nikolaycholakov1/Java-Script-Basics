function extractNonDecreasingSubset(numbers) {
  let result = [];

  let currentMax = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= currentMax) {
      result.push(numbers[i]);
      currentMax = numbers[i];
    }
  }

  return result;
}

console.log(extractNonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
