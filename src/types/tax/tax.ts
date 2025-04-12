export interface ITax {
  readonly tax: number;
}

const FEE = 0.2;

export function calculateTax(profit: number): ITax {
  if (profit < 0) {
    return { tax: 0 };
  }

  return { tax: profit * FEE };
}
