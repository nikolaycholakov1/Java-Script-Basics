function basketallGear(input) {
  let yearly_training_cost = Number(input[0]);

  shoes_cost = yearly_training_cost * 0.6;
  clothing_cost = shoes_cost * 0.8;
  ball_cost = clothing_cost * 0.25;
  accessories_cost = ball_cost * 0.2;

  total_cost =
    yearly_training_cost +
    shoes_cost +
    clothing_cost +
    ball_cost +
    accessories_cost;

  console.log(total_cost);
}

basketallGear(["365"]);
basketallGear(["550"]);
