import { calculateTaxes } from "./calculate-taxes";
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

describe("case 1", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_1);
    expect(result).toEqual([{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }]);
  });
});

describe("case 2", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_2);
    expect(result).toEqual([{ tax: 0.0 }, { tax: 10000.0 }, { tax: 0.0 }]);
  });
});

describe("case 3", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_3);
    expect(result).toEqual([{ tax: 0.0 }, { tax: 0.0 }, { tax: 1000.0 }]);
  });
});

describe("case 4", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_4);
    expect(result).toEqual([{ tax: 0.0 }, { tax: 0.0 }, { tax: 0.0 }]);
  });
});

describe("case 5", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_5);
    expect(result).toEqual([
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 10000.0 },
    ]);
  });
});

describe("case 6", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_6);
    expect(result).toEqual([
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3000.0 },
    ]);
  });
});

describe("case 7", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_7);
    expect(result).toEqual([
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3000.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 3700.0 },
      { tax: 0.0 },
    ]);
  });
});

describe("case 8", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_8);
    expect(result).toEqual([
      { tax: 0.0 },
      { tax: 80000.0 },
      { tax: 0.0 },
      { tax: 60000.0 },
    ]);
  });
});

describe("case 9", () => {
  it("should return the correct taxes", () => {
    const result = calculateTaxes(case_9);
    expect(result).toEqual([
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 0.0 },
      { tax: 1000.0 },
      { tax: 2400.0 },
    ]);
  });
});
