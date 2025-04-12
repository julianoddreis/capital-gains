interface IWeightedAveragePriceParams {
  readonly currentQuantity: number;
  readonly currentAveragePrice: number;
  readonly buyingQuantity: number;
  readonly buyingPrice: number;
}

export function weightedAveragePrice({
  currentAveragePrice,
  currentQuantity,
  buyingQuantity,
  buyingPrice,
}: IWeightedAveragePriceParams): number {
  const totalPrice =
    currentQuantity * currentAveragePrice + buyingQuantity * buyingPrice;

  const totalQuantity = currentQuantity + buyingQuantity;

  return totalPrice / totalQuantity;
}
