import readline from "readline";

import { main } from "./capital-gains";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

main(rl);
