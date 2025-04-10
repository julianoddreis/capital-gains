import { readFromStdin } from "./utils/read-from-stdin";
import { IOperation } from "./domain/operation";
import { operationsMapper } from "./utils/operations-mapper";

async function main() {
  try {
    const operations = await readFromStdin<ReadonlyArray<IOperation>>(
      operationsMapper
    );
    console.log("operations", operations);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
