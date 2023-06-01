

const main = async () => {
    const data = await (await Deno.readTextFileSync('./input.txt')).split('\n');
    let fullyContain = 0;
    data.forEach((item: string) => {
        const [range1, range2] = item.split(",");
        const [start1,end1] = range1.split("-").map((item)=>Number(item));
        const [start2, end2] = range2.split("-").map((item) => Number(item));
        if(start1<= start2 && end1>=end2){
            fullyContain+=1;
        }        
        else if(start2<=start1 && end2 >= end1){
            fullyContain+=1;
        }
    });
    console.log(fullyContain);
}


await main();