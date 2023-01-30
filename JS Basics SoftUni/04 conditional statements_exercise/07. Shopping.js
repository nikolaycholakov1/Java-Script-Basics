function shopping(input) {
  let budget = Number(input[0]);
  let gpu_count = Number(input[1]);
  let cpu_count = Number(input[2]);
  let ram_count = Number(input[3]);

  let gpu_price = gpu_count * 250;
  let cpu_price = gpu_price * 0.35 * cpu_count;
  let ram_price = gpu_price * 0.1 * ram_count;
  total_expenses = gpu_price + cpu_price + ram_price;

  if (gpu_count > cpu_count) {
    total_expenses = total_expenses - total_expenses * 0.15;
  }

  let diff = Math.abs(budget - total_expenses);

  if (budget >= total_expenses) {
    console.log(`You have ${diff.toFixed(2)} leva left!`);
  } else {
    console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`);
  }
}

shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);
