const main = async () => {
  const data = (await (await (Deno.readTextFile("./input.txt"))).split("\n"))
    .map((item) => Number(item));

  let count = 0;
  let curr = data[0];
  for (let i = 1; i < data.length; i++) {
    if (curr < data[i]) {
      count += 1;
    }
    curr = data[i];
  }
  console.log(count);
};

await main();
