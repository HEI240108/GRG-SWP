import { assertAlmostEquals } from "jsr:@std/assert";
import { bmi } from "./main.ts";

const corrects = [
  [42, 1.68, 14.9],
  [56, 1.63, 21.1],
  [127, 2.2, 26.2],
  [105, 1.65, 38.6],
  [131, 1.83, 39.1],
];

Deno.test(function bmiTest() {
  for (const [kg, m, bmi_loop] of corrects) {
    assertAlmostEquals(bmi(kg, m), bmi_loop, .1, "bmi richtig");
  }
});
