function aquarium(input) {
  let length = Number(input[0]);
  let width = Number(input[1]);
  let height = Number(input[2]);
  let percent = Number(input[3]);

  aquarium_volume = length * width * height;
  aquarium_volume_in_liters = aquarium_volume / 1000;
  volume_taken = percent / 100;
  needed_liters = aquarium_volume_in_liters * (1 - volume_taken);

  console.log(needed_liters);
}

aquarium(["85 ", "75 ", "47 ", "17 "]);
aquarium(["105 ", "77 ", "89 ", "18.5 "]);
