export enum OperationType {
  Buy = "buy",
  Sell = "sell",
}

export interface IOperation {
  readonly type: OperationType;
  readonly unitCost: number;
  readonly quantity: number;
}
