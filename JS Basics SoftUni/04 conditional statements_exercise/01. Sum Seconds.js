function sumOfSeonds(input) {
  let time_first = Number(input[0]);
  let time_second = Number(input[1]);
  let time_third = Number(input[2]);

  total_time = time_first + time_second + time_third;
  minutes = Math.floor(total_time / 60);
  seconds = total_time % 60;

  if (seconds < 10) {
    console.log(`${minutes}:0${seconds}`);
  } else {
    console.log(`${minutes}:${seconds}`);
  }
}

sumOfSeonds(["35", "45", "44"]);
sumOfSeonds(["22", "7", "34"]);
sumOfSeonds(["50", "50", "49"]);
sumOfSeonds(["14", "12", "10"]);
