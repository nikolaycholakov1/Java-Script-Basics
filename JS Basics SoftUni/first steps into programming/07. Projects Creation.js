function projects(input) {
  // "The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."
  let name = input[0];
  let projects = input[1];
  let hours = Number(projects) * 3;
  result = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`;

  console.log(result);
}

projects(["George ", "4 "]);
projects(["Sanya ", "9 "]);
