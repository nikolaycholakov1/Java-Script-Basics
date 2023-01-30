function worldSwimmingRecord(input) {
  let record_in_seconds = Number(input[0]);
  let distance_in_meters = Number(input[1]);
  let meters_per_second = Number(input[2]);

  let distance_to_travel = distance_in_meters * meters_per_second;
  let extra_time = Math.floor(distance_in_meters / 15) * 12.5;
  let total_distance = distance_to_travel + extra_time;

  if (total_distance < record_in_seconds) {
    console.log(
      `Yes, he succeeded! The new world record is ${total_distance.toFixed(
        2
      )} seconds.`
    );
  } else if (total_distance >= record_in_seconds) {
    console.log(
      `No, he failed! He was ${(total_distance - record_in_seconds).toFixed(
        2
      )} seconds slower.`
    );
  }
}

worldSwimmingRecord(["10464", "1500", "20"]);
worldSwimmingRecord(["55555.67", "3017", "5.03"]);
