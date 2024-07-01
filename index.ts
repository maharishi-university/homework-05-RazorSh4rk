import Meditation from "./ex1";
import isPrime from "./ex2";
import recipes from "./ex3";

const settings = {
    x1: false,
    x2: true,
    x3: false
};

if (settings.x1) {
    const morning_meditation = new Meditation(5);
    morning_meditation.start();
    console.log(`Start meditation`);
}
if (settings.x2) {
    console.log('start');
    isPrime(7)
        .then(console.log)
        .catch(console.error);
    console.log('end');

    try {
        const p: { prime: boolean; } = await isPrime(8);
        console.log("prime");
    } catch (err) {
        console.log("not prime");
    }
}

if (settings.x3) {
    recipes();
}
