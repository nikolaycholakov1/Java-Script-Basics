function repainting(input) {
  let nailon = Number(input[0]);
  let needed_paint = Number(input[1]);
  let solvent = Number(input[2]);
  let work_hours = Number(input[3]);

  bonus_paint = needed_paint * (10 / 100);
  nailon_sum = (nailon + 2) * 1.5;
  paint_cost = (needed_paint + bonus_paint) * 14.5;
  solvent_cost = solvent * 5;
  materials_cost = nailon_sum + paint_cost + solvent_cost + 0.4;

  workers_cost = materials_cost * 0.3 * work_hours;
  console.log(`${workers_cost + materials_cost}`);
}

repainting(["10 ", "11 ", "4 ", "8 "]);
repainting(["5 ", "10 ", "10 ", "1 "]);
