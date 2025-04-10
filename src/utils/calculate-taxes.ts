import { IOperation } from "../domain/operation";
import { ITax } from "../domain/tax";

export function calculateTaxes(
  operations: ReadonlyArray<IOperation>
): ReadonlyArray<ITax> {
  return [];
}
