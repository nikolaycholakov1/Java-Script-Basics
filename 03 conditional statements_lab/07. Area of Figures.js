function areaOfFigures(input) {
  let shape = input[0];
  let param1 = Number(input[1]);
  let param2 = Number(input[2]);

  if (shape == "square") {
    result = param1 * param1;
    console.log(result.toFixed(3));
  } else if (shape == "rectangle") {
    result = param1 * param2;
    console.log(result.toFixed(3));
  } else if (shape == "circle") {
    result = Math.PI * param1 * param1;
    console.log(result.toFixed(3));
  } else if (shape == "triangle") {
    result = (param1 * param2) / 2;
    console.log(result.toFixed(3));
  }
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle", "7", "2.5"]);
areaOfFigures(["circle", "6"]);
areaOfFigures(["triangle", "4.5", "20"]);
