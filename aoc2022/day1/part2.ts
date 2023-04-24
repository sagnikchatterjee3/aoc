
const solve = (items: string[]) => {
    return items.reduce((acc: number[], curr: string) => {
        if (curr === "") {
            acc.push(0);
        }
        else {
            const prev = acc.length - 1;
            acc[prev] += Number(curr);
        }
        return acc;
    }, [0]);
}

const main = async () => {
    const items = await (await Deno.readTextFile("./input.txt")).split("\n");
    //for part2 we want the top 3 elves 
    console.log(solve(items).sort((a, b) => a - b).slice(-3).reduce((sum, x) => sum + x, 0));
}

try {
    main();
} catch (e) {
    console.error(e);
}