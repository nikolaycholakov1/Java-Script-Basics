function toyShop(input) {
  let vacation_price = Number(input[0]);
  let puzzles = Number(input[1]);
  let talking_dolls = Number(input[2]);
  let teddy_bears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  toys_ordered = puzzles + talking_dolls + teddy_bears + minions + trucks;
  profit =
    puzzles * 2.6 +
    talking_dolls * 3 +
    teddy_bears * 4.1 +
    minions * 8.2 +
    trucks * 2;

  if (toys_ordered >= 50) {
    profit = profit - profit * 0.25;
  }

  let rent = profit * 0.1;
  profit -= rent;
  profit -= vacation_price;

  if (profit >= 0) {
    console.log(`Yes! ${profit.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${Math.abs(profit).toFixed(2)} lv needed.`);
  }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);
