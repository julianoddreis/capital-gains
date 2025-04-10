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

export async function readFromStdin<T>(mapper: (data: any) => T): Promise<T> {
  const lines = await readLines();

  const data = lines.join("\n");

  return mapper(JSON.parse(data));
}
