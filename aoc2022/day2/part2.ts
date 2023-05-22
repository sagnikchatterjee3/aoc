const main = async () => {
  const data = await (await Deno.readTextFile("./input.txt")).split("\n");
  let score = 0;
  for (const line of data) {
    const [x, y] = line.split(" ");
    if (x === "A") {
      if (y === "X") {
        score += 3;
      } else if (y === "Y") {
        score += 4;
      } else if (y === "Z") {
        score += 8;
      }
    } else if (x === "B") {
      if (y === "X") {
        score += 1;
      } else if (y === "Y") {
        score += 5;
      } else if (y == "Z") {
        score += 9;
      }
    } else if (x === "C") {
      if (y === "X") {
        score += 2;
      } else if (y === "Y") {
        score += 6;
      } else if (y === "Z") {
        score += 7;
      }
    }
  }
  console.log(score);
};

await main();
