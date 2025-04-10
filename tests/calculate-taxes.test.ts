import { calculateTaxes } from "../src/utils/calculate-taxes";
import {
  case_1,
  case_2,
  case_3,
  case_4,
  case_5,
  case_6,
  case_7,
  case_8,
  case_9,
} from "./__fixtures__/operations";

describe.each([
  {
    operations: case_1,
    taxes: [{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }],
  },
  {
    operations: case_2,
    taxes: [{ tax: 0.0 }, { tax: 10000.0 }, { tax: 0.0 }],
  },
  {
    operations: case_3,
    taxes: [{ tax: 0.0 }, { tax: 0.0 }, { tax: 1000.0 }],
  },
  {
    operations: case_4,
    taxes: [{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }],
  },
  {
    operations: case_5,
    taxes: [{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }, { tax: 10000.0 }],
  },
  {
    operations: case_6,
    taxes: [
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3000.0 },
    ],
  },
  {
    operations: case_7,
    taxes: [
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3000.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3700.0 },
      { tax: 0.0 },
    ],
  },
  {
    operations: case_8,
    taxes: [{ tax: 0.0 }, { tax: 80000.0 }, { tax: 0.0 }, { tax: 60000.0 }],
  },
  {
    operations: case_9,
    taxes: [
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 1000.0 },
    ],
  },
])("given the operation cases", ({ operations, taxes }) => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(operations);

    expect(result).toEqual(taxes);
  });
});
