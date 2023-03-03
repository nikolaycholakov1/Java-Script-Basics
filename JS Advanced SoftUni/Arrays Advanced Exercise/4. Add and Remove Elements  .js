function rotateArrayRight(arr, rotations) {
  for (let i = 0; i < rotations; i++) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  console.log(arr.join(" "));
}

rotateArrayRight(["1", "2", "3", "4"], 2);
rotateArrayRight(["Banana", "Orange", "Coconut", "Apple"], 15);
