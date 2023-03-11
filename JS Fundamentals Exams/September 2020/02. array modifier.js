function solve(input) {
  let arr = input[0].split(" ");

  for (const line of input.slice(1)) {
    let data = line.split(" ");

    let command = data[0];

    if (command === "end") {
      break;
    } else if (command === "decrease") {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]) - 1;
      }
    } else if (command === "swap") {
      let index1 = Number(data[1]);
      let index2 = Number(data[2]);

      [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    } else if (command === "multiply") {
      let index1 = Number(data[1]);
      let index2 = Number(data[2]);

      arr[index1] *= arr[index2];
    }
  }
  let output = arr;
  console.log(output.join(", "));
}

solve([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

solve([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
