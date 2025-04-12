import { IOperation, OperationType } from "../domain/operation";
import { calculateFee, ITax } from "../domain/tax";
import { weightedAveragePrice } from "./weighted-average-price";

interface IState {
  readonly averagePrice: number;
  readonly quantity: number;
  readonly accumulatedLoss: number;
  readonly taxes: ReadonlyArray<ITax>;
}

const initialState: IState = {
  averagePrice: 0,
  quantity: 0,
  accumulatedLoss: 0,
  taxes: [],
};

export function calculateTaxes(
  operations: ReadonlyArray<IOperation>
): ReadonlyArray<ITax> {
  const result = operations.reduce<IState>((acc, operation) => {
    switch (operation.type) {
      case OperationType.Buy:
        return handleBuy(acc, operation);

      case OperationType.Sell:
        return handleSell(acc, operation);
    }
  }, initialState);

  return result.taxes;
}

function handleBuy(acc: IState, operation: IOperation): IState {
  const quantity = acc.quantity + operation.quantity;

  const averagePrice = weightedAveragePrice({
    currentQuantity: acc.quantity,
    currentAveragePrice: acc.averagePrice,
    buyingQuantity: operation.quantity,
    buyingPrice: operation.unitCost,
  });

  return {
    ...acc,
    averagePrice,
    quantity,
    taxes: [...acc.taxes, { tax: 0 }],
  };
}

function handleSell(acc: IState, operation: IOperation): IState {
  const quantity = acc.quantity - operation.quantity;

  const sellingPrice = operation.quantity * operation.unitCost;

  const profit = sellingPrice - acc.averagePrice * operation.quantity;

  if (profit < 0) {
    return {
      ...acc,
      quantity,
      accumulatedLoss: acc.accumulatedLoss + profit,
      taxes: [...acc.taxes, { tax: 0 }],
    };
  }

  if (sellingPrice <= 20000) {
    return {
      ...acc,
      quantity,
      taxes: [...acc.taxes, { tax: 0 }],
    };
  }

  const totalProfit = acc.accumulatedLoss + profit;

  const tax = totalProfit > 0 ? calculateFee(totalProfit) : 0;

  return {
    ...acc,
    quantity,
    accumulatedLoss:
      acc.accumulatedLoss === 0 ? 0 : totalProfit > 0 ? 0 : totalProfit,
    taxes: [...acc.taxes, { tax }],
  };
}
