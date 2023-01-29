function depositCalculator(input) {
  let depositSum = Number(input[0]);
  let depositTerm = Number(input[1]);
  let yearlyInterest = Number(input[2]);

  accumulatedInterest = depositSum * (yearlyInterest / 100);
  monthlyIntrest = accumulatedInterest / 12;
  sum = depositSum + depositTerm * monthlyIntrest;
  console.log(sum);
}

depositCalculator(["200 ", "3 ", "5.7 "]);
depositCalculator(["2350", "6 ", "7 "]);
