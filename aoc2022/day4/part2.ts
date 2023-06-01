

const main = async () => {
    const data = await (await Deno.readTextFileSync('./input.txt')).split('\n');
    let pairRangeOverlap = 0;
    data.forEach((item: string) => {
        const [range1, range2] = item.split(",");
        const [start1, end1] = range1.split("-").map((item) => Number(item));
        const [start2, end2] = range2.split("-").map((item) => Number(item));
        //https://stackoverflow.com/questions/40076260/how-can-i-find-out-if-two-lines-overlap
        if ((start2 <= end1 && start2 >= start1) || (start1 <= end2 && start1 >= start2)) {
            pairRangeOverlap += 1;
        }
    });
    console.log(pairRangeOverlap);
}


await main();