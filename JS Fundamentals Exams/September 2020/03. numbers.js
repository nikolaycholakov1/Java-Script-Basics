function solve(input) {
  let arr = input.split(" ");

  let output = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  let averageNum = sum / arr.length;

  for (const num of arr) {
    if (num > averageNum) {
      output.push(num);
    }
  }

  let sortedOutput = output.sort((a, b) => b - a);

  let asdasd = [];

  for (const num of sortedOutput) {
    if (asdasd.length >= 5) {
      break;
    } else {
      asdasd.push(num);
    }
  }

  if (asdasd.length === 0) {
    console.log("No");
  } else {
    console.log(asdasd.join(" "));
  }
}

// solve("10 20 30 40 50");
solve("5 2 3 4 -10 30 40 50 20 50 60 60 51");
// solve("1");
// solve("-1 -2 -3 -4 -5 -6");
