export interface ITax {
  readonly tax: number;
}

const FEE = 0.2;

export function calculateTax(profit: number): number {
  if (profit < 0) {
    return 0;
  }

  return profit * FEE;
}
