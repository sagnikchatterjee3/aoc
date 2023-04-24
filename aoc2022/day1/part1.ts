
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
    console.log(Math.max(...solve(items)));
}

try {
    main();
} catch (e) {
    console.error(e);
}