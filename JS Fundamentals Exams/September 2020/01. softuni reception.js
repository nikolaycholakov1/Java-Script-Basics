function solve(input) {
  let numOfstudents = input[input.length - 1];
  let employees = input.slice(0, -1);
  let studentsPerHour = 0;

  for (let i = 0; i < employees.length; i++) {
    studentsPerHour += Number(employees[i]);
  }

  let hours = 0;
  while (numOfstudents > 0) {
    hours += 1;

    if (hours % 4 === 0) {
      continue;
    }

    numOfstudents -= studentsPerHour;
  }
  console.log(`Time needed: ${hours}h.`);
}

// solve(["5", "6", "4", "20"]);
solve(["1", "2", "3", "45"]);
// solve(["3", "2", "5", "40"]);
