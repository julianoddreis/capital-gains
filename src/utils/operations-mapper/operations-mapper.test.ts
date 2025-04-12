import { operationsMapper } from "./operations-mapper";
import { OperationType } from "@/types/operation";

describe("operationsMapper", () => {
  it("should map valid buy operations correctly", () => {
    const input = [
      {
        operation: "buy",
        "unit-cost": 10.5,
        quantity: 100,
      },
    ];

    const result = operationsMapper(input);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      type: OperationType.Buy,
      unitCost: 10.5,
      quantity: 100,
    });
  });

  it("should map valid sell operations correctly", () => {
    const input = [
      {
        operation: "sell",
        "unit-cost": 15.75,
        quantity: 50,
      },
    ];

    const result = operationsMapper(input);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      type: OperationType.Sell,
      unitCost: 15.75,
      quantity: 50,
    });
  });

  it("should map multiple operations correctly", () => {
    const input = [
      {
        operation: "buy",
        "unit-cost": 10.5,
        quantity: 100,
      },
      {
        operation: "sell",
        "unit-cost": 15.75,
        quantity: 50,
      },
    ];

    const result = operationsMapper(input);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      type: OperationType.Buy,
      unitCost: 10.5,
      quantity: 100,
    });
    expect(result[1]).toEqual({
      type: OperationType.Sell,
      unitCost: 15.75,
      quantity: 50,
    });
  });

  it("should throw error for invalid operation type", () => {
    const input = [
      {
        operation: "invalid",
        "unit-cost": 10.5,
        quantity: 100,
      },
    ];

    expect(() => operationsMapper(input)).toThrow();
  });

  it("should throw error for missing required fields", () => {
    const input = [
      {
        operation: "buy",
        // missing unit-cost
        quantity: 100,
      },
    ];

    expect(() => operationsMapper(input)).toThrow();
  });

  it("should throw error for non-array input", () => {
    const input = {
      operation: "buy",
      "unit-cost": 10.5,
      quantity: 100,
    };

    expect(() => operationsMapper(input)).toThrow();
  });
});
