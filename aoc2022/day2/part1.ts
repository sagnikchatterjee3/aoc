type Guide = {
    X: string;
    Y: string;
}

const main = async () => {
    const text = await (await Deno.readTextFile('./input.txt')).split("\n");

    text.forEach((guide) => {
        
    })
}

try {
    main();
}
catch (e) {
    console.error(e);
}