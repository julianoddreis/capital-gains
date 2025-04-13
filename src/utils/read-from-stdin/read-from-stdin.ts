import readline from "readline";

function question(rl: readline.Interface): Promise<string> {
  return new Promise((resolve) => {
    rl.question("> ", (answer) => {
      resolve(answer);
    });
  });
}

async function readLines(rl: readline.Interface, acc: string[]): Promise<string[]> {
  const line = await question(rl);

  if (line.trim() === "") {
    rl.close();
    return acc;
  }

  return readLines(rl, [...acc, line]);
}

export async function readFromStdin<T>(
  rl: readline.Interface,
  mapper: (data: any) => T,
): Promise<ReadonlyArray<T>> {
  const lines = await readLines(rl, []);

  return lines.map((line) => mapper(JSON.parse(line)));
}
