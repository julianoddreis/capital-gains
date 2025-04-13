import readline from "readline";

import { IOperation } from "@/types/operation/operation";
import { readFromStdin } from "@/utils/read-from-stdin";
import { operationsMapper } from "@/utils/operations-mapper";
import { calculateTaxes } from "@/utils/calculate-taxes";

export async function main(rl: readline.Interface): Promise<void> {
  try {
    const operationsList = await readFromStdin<ReadonlyArray<IOperation>>(rl, operationsMapper);

    operationsList.forEach((operations) => {
      const taxes = calculateTaxes(operations);
      console.log(JSON.stringify(taxes) + "\n");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
