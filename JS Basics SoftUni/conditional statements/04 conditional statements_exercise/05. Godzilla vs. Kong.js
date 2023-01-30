function shittyMovie(input) {
  let film_budget = Number(input[0]);
  let extras = Number(input[1]);
  let clothing_for_1_extra = Number(input[2]);

  if (extras > 150) {
    clothing_for_1_extra = clothing_for_1_extra * 0.9;
  }

  let film_decor = film_budget * 0.1;
  let price_for_all_clothing = extras * clothing_for_1_extra;
  let expenses = film_decor + price_for_all_clothing;

  if (film_budget >= expenses) {
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${(film_budget - expenses).toFixed(
        2
      )} leva left.`
    );
  } else if (expenses > film_budget) {
    console.log("Not enough money!");
    console.log(
      `Wingard needs ${Math.abs(film_budget - expenses).toFixed(2)} leva more.`
    );
  }
}

shittyMovie(["20000", "120", "55.5"]);
shittyMovie(["15437.62", "186", "57.99"]);
shittyMovie(["9587.88", "222", "55.68"]);
