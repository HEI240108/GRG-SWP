import { faker, fakerDE } from "npm:@faker-js/faker";

export function bmi(kg: number, m: number): number {
  return kg / (m * m);
}

export function produce_persons(count: number = 10): void {
  for (let i = 0; i < count; i++) {
    const sex = faker.person.sexType();
    const nn = fakerDE.person.lastName(sex);
    const vn = fakerDE.person.firstName(sex);
    const kg = faker.number.int({ min: 30, max: 150 });
    const m = faker.number.float({ min: 1.4, max: 2.3, fractionDigits: 2 });
    // const bmi = kg / (m * m);
    console.log(`${vn}|${nn}|${sex}|${kg}|${m}`);
    // console.log([kg, m, Math.round(bmi * 10) / 10]);
  }
}

produce_persons(15);
// produce_persons(7);
