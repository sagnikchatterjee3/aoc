
function getCommon(arr1: string, arr2: string): string {
  // o(n^2) solution; can be optmized using hashmap
  const result: string[] = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result.join('');
}

const main = async () => {
  const data = await (await (Deno.readTextFileSync('./partial.txt')).split('\n'));
  let result = 0;
  data.forEach((item: string) => {
    const [arr1, arr2] = item.slice(item.length / 2, item.length);
    const common = getCommon(arr1, arr2);
    if (common === common.toUpperCase()) {
      result += common.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
    }
    else {
      result += common.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }
  });
  console.log(result);
}

await main();
