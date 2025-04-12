import { IOperation } from "@/types/operation/operation";
import { readFromStdin } from "@/utils/read-from-stdin";
import { operationsMapper } from "@/utils/operations-mapper";
import { calculateTaxes } from "@/utils/calculate-taxes";

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
