import { readFromStdin } from "./utils/read-from-stdin/read-from-stdin";
import { IOperation } from "./types/operation";
import { operationsMapper } from "./utils/operations-mapper/operations-mapper";

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
