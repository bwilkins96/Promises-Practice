/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1() {
    return 1;
}

async function num2() {
    return 2;
}

console.log('num1', num1());
console.log('num2', num2());
num2().then(result => console.log(result, '\n'));


/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting() {
    const value = await num2();
    console.log('waiting', value, '\n');
}

waiting();


/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => { resolve('done!!!')}, 1000);
    });

    const result = await promise;
    console.log("my promise is", result, '\n');
}

waitForMyPromise();


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

new Promise((resolve) => {
    setTimeout(() => {resolve("done!")}, 1500);
}).then(r => console.log("then my other promise is", r, "\n"));


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function delayedMessage(message, seconds) {
    wait(1000 * seconds).then(() => console.log(message, "\n"));
}

delayedMessage("Hello world! :)", 2);


/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = random => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});

for (let i = 1; i <= 10; i++) {
    let random = Math.random();
    wait(2000 + random * 1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log(`random try #${i}: ${result}`))
        .catch(error => console.error(`random try #${i}: ${error}`))
}


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

const trytryAgain = async (i) => {
    let random = Math.random();

    await wait(3000 + random * 1000);

    try {
        let result = await tryRandomPromise(random);
        console.log("another random try #", i, ": ", result);
    } catch(error) {
        console.error("another random try #", i, ": ", error);
    }
}

for(let i = 0; i < 10; i++) {
    trytryAgain(i);
}


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

wait(4000).then(() => console.log("\nEND OF PROGRAM!!!!!!"));
