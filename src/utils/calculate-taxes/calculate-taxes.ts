import { IOperation, OperationType } from "@/types/operation";
import { calculateTax, ITax } from "@/types/tax";
import { weightedAveragePrice } from "@/utils/weighted-average-price";

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
  const result = operations.reduce<IState>((state, operation) => {
    switch (operation.type) {
      case OperationType.Buy:
        return handleBuy(state, operation);

      case OperationType.Sell:
        return handleSell(state, operation);
    }
  }, initialState);

  return result.taxes;
}

function handleBuy(state: IState, operation: IOperation): IState {
  const quantity = state.quantity + operation.quantity;

  const averagePrice = weightedAveragePrice({
    currentQuantity: state.quantity,
    currentAveragePrice: state.averagePrice,
    buyingQuantity: operation.quantity,
    buyingPrice: operation.unitCost,
  });

  return {
    ...state,
    averagePrice,
    quantity,
    taxes: [...state.taxes, { tax: 0 }],
  };
}

function handleSell(state: IState, operation: IOperation): IState {
  const quantity = state.quantity - operation.quantity;

  const sellingPrice = operation.quantity * operation.unitCost;

  const profit = sellingPrice - state.averagePrice * operation.quantity;

  if (profit > 0 && sellingPrice <= 20000) {
    return {
      ...state,
      quantity,
      taxes: [...state.taxes, { tax: 0 }],
    };
  }

  const totalProfit = state.accumulatedLoss + profit;

  const tax = calculateTax(totalProfit);

  return {
    ...state,
    quantity,
    accumulatedLoss: Math.min(0, totalProfit),
    taxes: [...state.taxes, { tax }],
  };
}
