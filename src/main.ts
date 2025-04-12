import { readFromStdin } from "./utils/read-from-stdin/read-from-stdin";
import { IOperation } from "./types/operation";
import { operationsMapper } from "./utils/operations-mapper/operations-mapper";
import { calculateTaxes } from "./utils/calculate-taxes";

async function main() {
  try {
    const operations = await readFromStdin<ReadonlyArray<IOperation>>(
      operationsMapper
    );

    const taxes = calculateTaxes(operations);

    console.log(taxes);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
