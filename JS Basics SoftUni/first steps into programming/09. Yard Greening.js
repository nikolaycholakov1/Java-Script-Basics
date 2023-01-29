function yardGreening(input) {
  let yard = Number(input[0]);
  discount = 0.18;
  price = yard * 7.61;
  discount = yard * 7.61 * discount;

  console.log(`The final price is: ${price - discount} lv.`);
  console.log(`The discount is: ${discount} lv.`);
}

yardGreening(["550"]);
yardGreening(["150"]);
