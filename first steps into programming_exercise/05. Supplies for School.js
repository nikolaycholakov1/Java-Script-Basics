function schoolUtensils(input) {
  let pens = input[0];
  let markers = input[1];
  let board_cleaner = input[2];
  let discount = input[3];

  pens_cost = Number(pens * 5.8);
  markers_cost = Number(markers * 7.2);
  cleaner_cost = Number(board_cleaner * 1.2);
  total_cost = pens_cost + markers_cost + cleaner_cost;
  discounted_cost = total_cost - total_cost * Number(discount / 100);
  console.log(discounted_cost);
}

schoolUtensils(["2 ", "3 ", "4 ", "25 "]);
schoolUtensils(["4 ", "2 ", "5 ", "13 "]);
