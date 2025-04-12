import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(): Promise<string> {
  return new Promise((resolve) => {
    rl.question("> ", (answer) => {
      resolve(answer);
    });
  });
}

async function readLines(acc: string[]): Promise<string[]> {
  const line = await question();

  if (line.trim() === "") {
    rl.close();
    return acc;
  }

  return readLines([...acc, line]);
}

export async function readFromStdin<T>(mapper: (data: any) => T): Promise<T> {
  const lines = await readLines([]);

  const data = lines.join("\n");

  return mapper(JSON.parse(data));
}
