function sortNames(names) {
  names.sort();
  let output = [];
  for (let pos = 0; pos < names.length; pos++) {
    output.push(`${pos + 1}.${names[pos]}`);
  }

  return output.join("\n");
}

console.log(sortNames(["John", "Bob", "Christina", "Ema"]));
