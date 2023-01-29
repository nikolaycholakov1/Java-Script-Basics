function literature(input) {
  let pages_in_a_book = input[0];
  let pages_per_hour = input[1];
  let days = input[2];

  time_spent_reading = pages_in_a_book / pages_per_hour;
  needed_hours = time_spent_reading / days;
  console.log(needed_hours);
}

literature(["212 ", "20 ", "2 "]);
literature(["432 ", "15 ", "4 "]);
