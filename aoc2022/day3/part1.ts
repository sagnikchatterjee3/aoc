
const getPriority = (char: string) => {
  const charCode = char.charCodeAt(0);
  return charCode > 90 ? charCode - 96 : charCode - 38;
};

const main = async () => {
  const data = await ((await Deno.readTextFile("./input.txt"))).split("\n");
  let s = 0;
  for (const item of data) {
    const half = Math.floor(item.length / 2);
    const [left, right] = [item.slice(0, half), item.slice(half)];

    let found = undefined;

    for (const char of left) {
      if (!right.includes(char)) continue;
      found = char;
      break;
    }

    if (!found) continue;
    s += getPriority(found);
  }
  console.log(s);
};

await main();
