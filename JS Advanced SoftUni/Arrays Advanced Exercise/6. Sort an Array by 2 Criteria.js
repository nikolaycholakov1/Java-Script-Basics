function orderStringsByLengthAndAlphabetical(arr) {
  arr.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    } else {
      return a.localeCompare(b, undefined, { sensitivity: "base" });
    }
  });

  arr.forEach((str) => console.log(str));
}

// orderStringsByLengthAndAlphabetical(["alpha", "beta", "gamma"]);
// orderStringsByLengthAndAlphabetical([
//   "Isacc",
//   "Theodor",
//   "Jack",
//   "Harrison",
//   "George",
// ]);
orderStringsByLengthAndAlphabetical(["test", "Deny", "omen", "Default"]);
