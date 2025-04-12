import { IOperation } from "@/types/operation/operation";
import { readFromStdin } from "@/utils/read-from-stdin";
import { operationsMapper } from "@/utils/operations-mapper";
import { calculateTaxes } from "@/utils/calculate-taxes";

async function main(): Promise<void> {
  try {
    const operationsList = await readFromStdin<ReadonlyArray<IOperation>>(operationsMapper);

    operationsList.forEach((operations) => {
      const taxes = calculateTaxes(operations);
      console.log(JSON.stringify(taxes) + "\n");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
