function timePlus15(input) {
  let hours = Number(input[0]);
  let minutes = Number(input[1]);

  let total_minutes = hours * 60 + minutes + 15;

  let final_hous = Math.floor(total_minutes / 60);
  let final_minutes = total_minutes % 60;
  if (final_hous === 24) {
    final_hous = 0;
  }

  if (final_minutes < 10) {
    console.log(`${final_hous}:0${final_minutes}`);
  } else {
    console.log(`${final_hous}:${final_minutes}`);
  }
}

timePlus15(["1", "46"]);
timePlus15(["0", "01"]);
timePlus15(["23", "59"]);
timePlus15(["11", "08"]);
timePlus15(["12", "49"]);
