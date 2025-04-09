import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readLines(): Promise<string[]> {
  return new Promise((resolve) => {
    const lines: string[] = [];

    function readLine() {
      rl.question("> ", (line: string) => {
        if (line.trim() === "") {
          rl.close();
          resolve(lines);
        } else {
          lines.push(line);
          readLine();
        }
      });
    }

    readLine();
  });
}

async function readJsonFromStdin<T>(): Promise<T> {
  const lines = await readLines();
  const data = lines.join("\n");
  return JSON.parse(data) as T;
}

async function main() {
  try {
    const operations = await readJsonFromStdin<any[]>();
    console.log(operations);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
