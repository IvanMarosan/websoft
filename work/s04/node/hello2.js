/**
 * A sample of a main function stating the famous Hello World.
 *
 * @returns void
 */
function main() {
    let a = 1;
    let b;
    let range = "";

    for (let i=0; i < 9; i++) {
        range += i + ", ";
        if (i == 5) {
            console.log("Hello!")
        }
    }
    console.info(range.substring(0, range.length - 2));
    console.info(a, b);
}

main();