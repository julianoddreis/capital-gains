import { IOperation } from "../domain/operation";
import { ITax } from "../domain/tax";

export function calculateGains(
  operations: ReadonlyArray<IOperation>
): ReadonlyArray<ITax> {
  return [];
}
