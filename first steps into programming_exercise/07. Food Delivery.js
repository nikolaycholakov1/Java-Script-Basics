function foodDelivery(input) {
  let chicken_menus = Number(input[0]);
  let fish_menus = Number(input[1]);
  let veggie_menus = Number(input[2]);

  chicken_menu_cost = chicken_menus * 10.35;
  fish_menus_cost = fish_menus * 12.4;
  veggie_menus_cost = veggie_menus * 8.15;
  all_menus_cost = chicken_menu_cost + fish_menus_cost + veggie_menus_cost;
  dessert_cost = all_menus_cost * 0.2;

  order_cost = all_menus_cost + dessert_cost + 2.5;

  console.log(`${order_cost}`);
}

foodDelivery(["2 ", "4 ", "3 "]);
foodDelivery(["9 ", "2 ", "6 "]);
