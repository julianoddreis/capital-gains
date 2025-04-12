export interface ITax {
  readonly tax: number;
}

const FEE = 0.2;

export function calculateFee(profit: number): number {
  return profit * FEE;
}
