import Meditation from "./ex1";
import isPrime from "./ex2";
import recipes from "./ex3"

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);

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

recipes()