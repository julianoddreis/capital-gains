import { weightedAveragePrice } from "./weighted-average-price";

describe("give a list of operations", () => {
  it("should return the weighted average price", () => {
    const result = weightedAveragePrice({
      currentAveragePrice: 20.0,
      currentQuantity: 5,
      buyingQuantity: 5,
      buyingPrice: 10.0,
    });

    expect(result).toBe(15.0);
  });
});
